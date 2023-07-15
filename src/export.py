import os

def list_files(folder_path, output_file):
    with open(output_file, 'w') as f:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                f.write(f'{file}:\n')
                if file.endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp')):
                    f.write('{image}\n')
                else:
                    with open(file_path, 'r') as code_file:
                        code = code_file.read()
                        f.write(code)
                f.write('===========\n')

# Provide the folder path and output file name
folder_path = '.'
output_file = 'output.txt'

# Call the function
list_files(folder_path, output_file)
