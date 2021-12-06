#!/bin/bash

for OUTPUT in $(ls *.sql) 
do 
	echo $OUTPUT	
	psql -d pagila -f $OUTPUT
	
done
