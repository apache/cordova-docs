import os

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
