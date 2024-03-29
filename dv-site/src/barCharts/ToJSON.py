import pandas as pd

# Load your TSV file
df = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df1 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df2 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df1 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df2 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')


# Convert to JSON
df.to_json('DHS_DOHHvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df1.to_json('DHS_DOHHvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df2.to_json('DHS_DOHHvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df.to_json('DHS_DOHHvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df1.to_json('DHS_DOHHvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df2.to_json('DHS_DOHHvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

# Ensure the path to your file is correct, and adjust 'path_to_your_file' as necessary.
