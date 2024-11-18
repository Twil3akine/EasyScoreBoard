#!/bin/bash

if [[ "$1" == "None" || "$2" == "None" ]]; then
    echo "Missing arguments."
    echo "No.1 arg is commit message."
    echo "No.2 arg is push branch"
    
    exit 1
fi

echo "===  git add ==="
git add .

echo "===  git status ==="
git status

echo "===  git commit ==="
git commit -m "$1"

echo "===  git push ==="
git push origin "$2"
