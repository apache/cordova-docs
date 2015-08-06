import os
import errno

def strip_front_matter(text):

    marker = '---'

    try:
        first_marker = text.index(marker)
    except ValueError as e:
        return text

    second_marker = text.index(marker, first_marker + len(marker))
    start         = second_marker + len(marker)

    return text[start:]

def listdirs(root_path):
    for subdir_name in os.listdir(root_path):
        subdir_path = os.path.join(root_path, subdir_name)
        if not os.path.isdir(subdir_path):
            continue
        yield subdir_name

def mkdirp(path):
    try:
        os.makedirs(path)
    except OSError as e:
        if e.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else:
            raise

def tocfile_name(language, version, suffix):
    version_slug = version.replace('.', '-')
    if suffix:
        suffix = '-' + suffix
    return '{l}-{v}{s}.yml'.format(l=language, v=version_slug, s=suffix)

def manual_tocfile_name(language, version):
    return tocfile_name(language, version, 'manual')

def generated_tocfile_name(language, version):
    return tocfile_name(language, version, 'generated')
