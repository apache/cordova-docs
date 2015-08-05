import os
import re
import sys
import yaml
import argparse

from util import *

def is_underline(line):
    return re.match(r'-+|=+|\*+', line) is not None

def get_page_title(page_path):

    # read in the page
    with open(page_path, 'r') as page_file:
        page = page_file.read()

    # remove the front matter
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

    # if all else fails, use the page name
    page_file_name = os.path.basename(page_path)
    return page_file_name.replace('.md', '').capitalize()

def generate(source_dir, prefix):

    toc = []

    # walk the tree
    for dir_root, dir_names, page_names in os.walk(source_dir):

        # get the URL prefix for pages in this directory
        dir_prefix = dir_root.replace(source_dir, '')
        url_prefix = prefix + dir_prefix

        # process each file
        for page_name in page_names:

            # skip non-Markdown files
            if not page_name.endswith('.md'):
                continue

            # compute page URL
            page_url = os.path.join(url_prefix, page_name)
            page_url = page_url.replace('.md', '.html')

            # extract page title
            page_path  = os.path.join(dir_root, page_name)
            page_title = get_page_title(page_path)

            toc.append({
                'name': page_title,
                'url': page_url
            })

    return yaml.dump(toc)

def main():

    # create argument parser
    arg_parser = argparse.ArgumentParser(prog=sys.argv[0])
    arg_parser.add_argument('source')
    arg_parser.add_argument('-o', '--output')
    arg_parser.add_argument('-p', '--prefix', default='')
    args = arg_parser.parse_args()

    source_dir  = args.source
    prefix      = args.prefix
    output_path = args.output

    # generate the toc
    toc_string = generate(source_dir, prefix)

    # write out the toc
    if output_path is not None:

        output_dir = os.path.dirname(output_path)

        if not os.path.exists(output_dir):
            mkdirp(output_dir)

        with open(output_path, 'w') as toc_file:
            toc_file.write(toc_string)
    else:
        print toc_string

if __name__ == '__main__':
    main()
