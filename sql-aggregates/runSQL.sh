#!/bin/bash
for OUTPUT in $(ls *.sql)
do
	echo psql -d pagila -f $OUTPUT
done
