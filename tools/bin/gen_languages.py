import os
import sys
import yaml

from util import *

def main():

    root_dir = sys.argv[1]
    config   = {}

    # extract configuration
    for lang_name in listdirs(root_dir):

        lang_path     = os.path.join(root_dir, lang_name)
        version_names = list(listdirs(lang_path))

        config[lang_name] = {
            'name':     lang_name,
            'versions': version_names
        }

    print yaml.dump(config)

if __name__ == '__main__':
    main()
