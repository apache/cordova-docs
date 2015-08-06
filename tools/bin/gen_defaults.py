import os
import sys
import yaml

from util import *

def main():

    root_dir = sys.argv[1]
    config   = {'defaults': list()}

    # extract configuration
    for lang_name in listdirs(root_dir):

        lang_path = os.path.join(root_dir, lang_name)

        # configure language scope
        config['defaults'].append({
            'scope': {
                'path': 'docs/' + lang_name
            },
            'values': {
                'language': lang_name,
                'layout': 'docs-' + lang_name
            }
        })

        # configure each version scope
        for version_name in listdirs(lang_path):

            manual = manual_tocfile_name(lang_name, version_name)
            generated = generated_tocfile_name(lang_name, version_name)

            config['defaults'].append({
                'scope': {
                    'path': 'docs/' + lang_name + '/' + version_name
                },
                'values': {
                    'version':       version_name,
                    'manual_toc':    manual.replace('.yml', ''),
                    'generated_toc': generated.replace('.yml', ''),
                }
            })

    print yaml.dump(config)

if __name__ == '__main__':
    main()
