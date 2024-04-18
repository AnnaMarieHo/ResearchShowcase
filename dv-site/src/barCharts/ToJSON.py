import pandas as pd


df = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df1 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df2 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df3 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df4 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df5 = pd.read_csv('DHS_DOHHvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df6 = pd.read_csv('eIF5A_DDvsDHS_DOHH/enrichment.KEGG.tsv', sep='\t')
df7 = pd.read_csv('eIF5A_DDvsDHS_DOHH/enrichment.RCTM.tsv', sep='\t')
df8 = pd.read_csv('eIF5A_DDvsDHS_DOHH/enrichment.WikiPathways.tsv', sep='\t')

df9 = pd.read_csv('eIF5A_DDvseIF5A/enrichment.KEGG.tsv', sep='\t')
df10 = pd.read_csv('eIF5A_DDvseIF5A/enrichment.RCTM.tsv', sep='\t')
df11 = pd.read_csv('eIF5A_DDvseIF5A/enrichment.WikiPathways.tsv', sep='\t')

df12 = pd.read_csv('eIF5A_DDvsK50A_DD/enrichment.KEGG.tsv', sep='\t')
df13 = pd.read_csv('eIF5A_DDvsK50A_DD/enrichment.RCTM.tsv', sep='\t')
df14 = pd.read_csv('eIF5A_DDvsK50A_DD/enrichment.WikiPathways.tsv', sep='\t')

df15 = pd.read_csv('eIF5A_DDvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df16 = pd.read_csv('eIF5A_DDvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df17 = pd.read_csv('eIF5A_DDvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df18 = pd.read_csv('eIF5A_DDvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df19 = pd.read_csv('eIF5A_DDvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df20 = pd.read_csv('eIF5A_DDvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df21 = pd.read_csv('eIF5AvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df22 = pd.read_csv('eIF5AvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df23 = pd.read_csv('eIF5AvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df24 = pd.read_csv('eIF5AvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df25 = pd.read_csv('eIF5AvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df26 = pd.read_csv('eIF5AvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df27 = pd.read_csv('K50A_DDvsDHS_DOHH/enrichment.KEGG.tsv', sep='\t')
df28 = pd.read_csv('K50A_DDvsDHS_DOHH/enrichment.RCTM.tsv', sep='\t')
df29 = pd.read_csv('K50A_DDvsDHS_DOHH/enrichment.WikiPathways.tsv', sep='\t')

df30 = pd.read_csv('K50A_DDvsTar4_EC/enrichment.KEGG.tsv', sep='\t')
df31 = pd.read_csv('K50A_DDvsTar4_EC/enrichment.RCTM.tsv', sep='\t')
df32 = pd.read_csv('K50A_DDvsTar4_EC/enrichment.WikiPathways.tsv', sep='\t')

df33 = pd.read_csv('K50A_DDvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df34 = pd.read_csv('K50A_DDvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df35 = pd.read_csv('K50A_DDvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')

df36 = pd.read_csv('Tar4_ECvsWT_EC/enrichment.KEGG.tsv', sep='\t')
df37 = pd.read_csv('Tar4_ECvsWT_EC/enrichment.RCTM.tsv', sep='\t')
df38 = pd.read_csv('Tar4_ECvsWT_EC/enrichment.WikiPathways.tsv', sep='\t')



df39 = pd.read_csv('DHS_DOHHvsTar4_EC/enrichment.NetworkNeighborAL.tsv', sep='\t')
df39.to_json('DHS_DOHHvsTar4_EC/enrichment.NetworkNeighborAL.json', orient='records', lines=False)



def compute_ratio(value):
    parts = value.split('|')
    return float(parts[0]) / float(parts[1])

def apply_ratio_computation(df, gene_ratio_col='GeneRatio', bg_ratio_col='BgRatio'):
    if gene_ratio_col in df.columns:
        df[gene_ratio_col] = df[gene_ratio_col].apply(compute_ratio)
    if bg_ratio_col in df.columns:
        df[bg_ratio_col] = df[bg_ratio_col].apply(compute_ratio)
    return df

def process_file(file_path, sep='\t', to_json_path=None, json_orient='records'):
    df = pd.read_csv(file_path, sep=sep)
    df = apply_ratio_computation(df)
    if to_json_path:
        df.to_json(to_json_path, orient=json_orient, lines=False)
    return df

df39 = process_file('testNetwork/eIF5AvsWT_EC.all.Reactome_enrich.csv', sep=',')
df39.to_json('testNetwork/eIF5AvsWT_EC.all.Reactome_enrich.json', orient='records', lines=False)

df40 = process_file('testNetwork/eIF5AvsWT_EC.DEG.all.csv', sep=',')
df40.to_json('testNetwork/eIF5AvsWT_EC.DEG.all.json', orient='records', lines=False)

# from scipy.cluster.hierarchy import linkage, leaves_list
# from scipy.spatial.distance import pdist
# import json

# def cluster_and_prepare_data(data):
#     # Calculate the pairwise distances between observations
#     distance_matrix = pdist(data, metric='euclidean')

#     # Perform hierarchical clustering
#     linked = linkage(distance_matrix, 'ward')

#     # Order the data according to the clustering
#     order = leaves_list(linked)
#     ordered_data = data.iloc[order, :].iloc[:, order]

#     # Convert data to a format suitable for JSON serialization
#     data_list = ordered_data.values.tolist()
#     return {
#         'ordered_data': data_list,
#         'order': order.tolist()
#     }

# def process_file(filepath, sep=','):
#     df = pd.read_csv(filepath)
#     # Assuming the dataframe needs to be prepared or normalized for clustering
#     # Normalize or preprocess data as needed before clustering
#     normalized_data = df  # Placeholder for actual preprocessing
#     return cluster_and_prepare_data(normalized_data)

# # Example usage
# clustered_data = process_file('testNetwork/eIF5AvsWT_EC.DEG.all.csv', sep=',')
# # Saving the clustered data as JSON
# with open('testNetwork/eIF5AvsWT_EC.DEG.all.json', 'w') as f:
#     json.dump(clustered_data, f)




# Convert to JSON
df.to_json('DHS_DOHHvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df1.to_json('DHS_DOHHvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df2.to_json('DHS_DOHHvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df3.to_json('DHS_DOHHvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df4.to_json('DHS_DOHHvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df5.to_json('DHS_DOHHvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df6.to_json('eIF5A_DDvsDHS_DOHH/enrichment.KEGG.json', orient='records', lines=False)
df7.to_json('eIF5A_DDvsDHS_DOHH/enrichment.RCTM.json', orient='records', lines=False)
df8.to_json('eIF5A_DDvsDHS_DOHH/enrichment.WikiPathways.json', orient='records', lines=False)
# Convert to JSON
df9.to_json('eIF5A_DDvseIF5A/enrichment.KEGG.json', orient='records', lines=False)
df10.to_json('eIF5A_DDvseIF5A/enrichment.RCTM.json', orient='records', lines=False)
df11.to_json('eIF5A_DDvseIF5A/enrichment.WikiPathways.json', orient='records', lines=False)

df12.to_json('eIF5A_DDvsK50A_DD/enrichment.KEGG.json', orient='records', lines=False)
df13.to_json('eIF5A_DDvsK50A_DD/enrichment.RCTM.json', orient='records', lines=False)
df14.to_json('eIF5A_DDvsK50A_DD/enrichment.WikiPathways.json', orient='records', lines=False)

df15.to_json('eIF5A_DDvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df16.to_json('eIF5A_DDvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df17.to_json('eIF5A_DDvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df18.to_json('eIF5A_DDvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df19.to_json('eIF5A_DDvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df20.to_json('eIF5A_DDvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df21.to_json('eIF5AvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df22.to_json('eIF5AvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df23.to_json('eIF5AvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df24.to_json('eIF5AvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df25.to_json('eIF5AvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df26.to_json('eIF5AvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df27.to_json('K50A_DDvsDHS_DOHH/enrichment.KEGG.json', orient='records', lines=False)
df28.to_json('K50A_DDvsDHS_DOHH/enrichment.RCTM.json', orient='records', lines=False)
df29.to_json('K50A_DDvsDHS_DOHH/enrichment.WikiPathways.json', orient='records', lines=False)

df30.to_json('K50A_DDvsTar4_EC/enrichment.KEGG.json', orient='records', lines=False)
df31.to_json('K50A_DDvsTar4_EC/enrichment.RCTM.json', orient='records', lines=False)
df32.to_json('K50A_DDvsTar4_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df33.to_json('K50A_DDvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df34.to_json('K50A_DDvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df35.to_json('K50A_DDvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)

df36.to_json('Tar4_ECvsWT_EC/enrichment.KEGG.json', orient='records', lines=False)
df37.to_json('Tar4_ECvsWT_EC/enrichment.RCTM.json', orient='records', lines=False)
df38.to_json('Tar4_ECvsWT_EC/enrichment.WikiPathways.json', orient='records', lines=False)






vp = pd.read_csv('../graphs/eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all.csv', sep=',')
vp1 = pd.read_csv('../graphs/DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all.csv', sep=',')
vp2 = pd.read_csv('../graphs/DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all.csv', sep=',')
vp3 = pd.read_csv('../graphs/eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all.csv', sep=',')
vp4 = pd.read_csv('../graphs/eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all.csv', sep=',')
vp5 = pd.read_csv('../graphs/eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all.csv', sep=',')
vp6 = pd.read_csv('../graphs/eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all.csv', sep=',')
vp7 = pd.read_csv('../graphs/eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all.csv', sep=',')
vp8 = pd.read_csv('../graphs/eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all.csv', sep=',')
vp9 = pd.read_csv('../graphs/K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all.csv', sep=',')
vp10 = pd.read_csv('../graphs/K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all.csv', sep=',')
vp11 = pd.read_csv('../graphs/K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all.csv', sep=',')
vp12 = pd.read_csv('../graphs/Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all.csv', sep=',')



vp.to_json('../graphs/eIF5A_DDvsTar4_EC/eIF5A_DDvsTar4_EC.DEG.all.csv.json', orient='records', lines=False)
vp1.to_json('../graphs/DHS_DOHHvsTar4_EC/DHS_DOHHvsTar4_EC.DEG.all.json', orient='records', lines=False)
vp2.to_json('../graphs/DHS_DOHHvsWT_EC/DHS_DOHHvsWT_EC.DEG.all.json', orient='records', lines=False)
vp3.to_json('../graphs/eIF5A_DDvsDHS_DOHH/eIF5A_DDvsDHS_DOHH.DEG.all.json',orient='records', lines=False)
vp4.to_json('../graphs/eIF5A_DDvseIF5A/eIF5A_DDvseIF5A.DEG.all.json', orient='records', lines=False)
vp5.to_json('../graphs/eIF5A_DDvsK50A_DD/eIF5A_DDvsK50A_DD.DEG.all.json', orient='records', lines=False)
vp6.to_json('../graphs/eIF5A_DDvsWT_EC/eIF5A_DDvsWT_EC.DEG.all.json', orient='records', lines=False)
vp7.to_json('../graphs/eIF5AvsTar4_EC/eIF5AvsTar4_EC.DEG.all.json', orient='records', lines=False)
vp8.to_json('../graphs/eIF5AvsWT_EC/eIF5AvsWT_EC.DEG.all.json', orient='records', lines=False)
vp9.to_json('../graphs/K50A_DDvsDHS_DOHH/K50A_DDvsDHS_DOHH.DEG.all.json', orient='records', lines=False)
vp10.to_json('../graphs/K50A_DDvsTar4_EC/K50A_DDvsTar4_EC.DEG.all.json', orient='records', lines=False)
vp11.to_json('../graphs/K50A_DDvsWT_EC/K50A_DDvsWT_EC.DEG.all.json', orient='records', lines=False)
vp12.to_json('../graphs/Tar4_ECvsWT_EC/Tar4_ECvsWT_EC.DEG.all.json', orient='records', lines=False)