import os
import sys

def main():
    counts = {}

    for root_path, dir_names, file_names in os.walk(sys.argv[1]):
        for file_name in file_names:

            name, extension = os.path.splitext(file_name)

            if extension not in counts:
                counts[extension] = 0

            counts[extension] += 1

    for extension, count in counts.items():
        print "{0:>10} = {1:<30}".format(repr(extension), count)

if __name__ == '__main__':
    main()
