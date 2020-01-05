page_count = 420

for page in range(1, page_count + 1):
    with open(f'{page}.md', 'w') as file:
        file.write(f'## {page}.\n\n')
        file.close()
