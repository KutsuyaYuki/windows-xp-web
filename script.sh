#!/bin/bash

# Function to process files
process_file() {
    filename=$1
    echo "> $filename:" >> files.txt
    cat "$filename" >> files.txt
    echo >> files.txt
}

# Function to traverse directories recursively
traverse_directory() {
    dir=$1
    ext=$2

    # Loop through files and directories in the current directory
    for file in "$dir"/*; do
        if [ -f "$file" ]; then
            # Process files with the specified extension
            if [[ $file == *"$ext" ]]; then
                process_file "$file"
            fi
        elif [ -d "$file" ]; then
            # Recursively traverse subdirectories
            traverse_directory "$file" "$ext"
        fi
    done
}

# Specify the current directory and extension
directory="."
extension=".tsx"

# Remove the existing file if present
rm -f files.txt

# Call the function to traverse the directory
traverse_directory "$directory" "$extension"
