#!/bin/bash 
echo "compressing lambda function";
DIRNAME=/deploy/compress-"$(date +%s)"
echo "compressing at $DIRNAME"
mkdir ./$DIRNAME
ls -a | sed '/^\./d;/deploy/d' | zip -rq -@ ./$DIRNAME/function.zip  
echo "Compressed Function" 
