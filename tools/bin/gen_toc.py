import os
import re
import sys
import yaml

from util import *

def is_underline(line):
    return re.match(r'-+|=+|\*+', line) is not None

def get_page_title(page_path):

    title = ''

    # read in the page and remove the front matter
    with open(page_path, 'r') as page_file:
        page = page_file.read()
    page = strip_front_matter(page)

    # look for hash-headings and underline-headings
    lines         = page.splitlines()
    previous_line = lines[0]

    for line in lines[1:]:

        if is_underline(line):
            return previous_line.strip()

        match = re.match(r'^#+(.+)$', line)
        if match:
            return match.group(1).strip()

        previous_line = line

    # look for the first <hX> heading
    match = re.search(r'[\s]*<h\d[^>]*>([^<]+)<\/h\d>', page, re.DOTALL)
    if match:
        return match.group(1).strip()

    if title == '':
        page_file_name = os.path.basename(page_path)
        return page_file_name.replace('.md', '').capitalize()

def main():

    src_dir  = sys.argv[1]

    data_root = os.path.join(src_dir, '_data', 'toc')
    docs_root = os.path.join(src_dir, 'docs')

    # go through all languages
    for lang_name in listdirs(docs_root):
        lang_path = os.path.join(docs_root, lang_name)

        # go through all versions
        for version_name in listdirs(lang_path):
            version_path = os.path.join(lang_path, version_name)

            # get path for toc file
            toc           = []
            toc_file_name = lang_name + '-' + version_name.replace('.', '-') + '.yml'
            toc_file_path = os.path.join(data_root, toc_file_name)

            # walk the version doc tree
            for dir_root, dir_names, page_names in os.walk(version_path):

                # get the URL prefix for pages in this directory
                page_prefix = dir_root.replace(src_dir, '')

                # process each file
                for page_name in page_names:

                    if not page_name.endswith('.md'):
                        continue

                    # compute page URL
                    page_url = os.path.join(page_prefix, page_name)
                    page_url = page_url.replace('.md', '.html')

                    # extract page title
                    page_path  = os.path.join(dir_root, page_name)
                    page_title = get_page_title(page_path)

                    toc.append({
                        'name': page_title,
                        'url': page_url
                    })

            # write out the toc
            toc_string = yaml.dump(toc)
            with open(toc_file_path, 'w') as data_file:
                data_file.write(toc_string)
            print toc_file_path

if __name__ == '__main__':
    main()
