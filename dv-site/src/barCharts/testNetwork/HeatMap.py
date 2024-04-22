# import pandas as pd
# import seaborn as sns
# import matplotlib.pyplot as plt
# from scipy.cluster.hierarchy import dendrogram, linkage
# from seaborn import clustermap

# # Load your data
# data = pd.read_csv('./eIF5AvsWT_EC.DEG.all.csv')

# # Select columns for experimental and control groups
# group_a_columns = [col for col in data.columns if 'SHEF1' not in col and 'fpkm' in col]
# group_b_columns = [col for col in data.columns if 'SHEF1' in col and 'fpkm' in col]

# # Calculate averages for each group
# data['avg_group_a'] = data[group_a_columns].mean(axis=1)
# data['avg_group_b'] = data[group_b_columns].mean(axis=1)

# # Compute deviations from group averages
# for col in group_a_columns + group_b_columns:
#     data[col + '_dev'] = data[col] - data['avg_group_' + ('a' if col in group_a_columns else 'b')]

# # Prepare data for heatmap
# deviation_columns = [col + '_dev' for col in group_a_columns + group_b_columns]
# deviation_data = data[deviation_columns]

# # Select the top 100 genes based on absolute average deviation
# top_100_genes = deviation_data.abs().mean(axis=1).nlargest(500).index
# deviation_data_top_100 = deviation_data.loc[top_100_genes]

# # Cluster and visualize
# clustered_heatmap = clustermap(deviation_data_top_100, method='ward', metric='euclidean', cmap='coolwarm', center=0, vmin=-1, vmax=1, figsize=(12, 10))
# plt.title('Clustered Deviation from Average Gene Expression (Range -2 to 2)')
# plt.show()

# import pandas as pd
# import seaborn as sns
# import matplotlib.pyplot as plt
# from scipy.cluster.hierarchy import dendrogram, linkage
# from seaborn import clustermap

# # Load your data
# data = pd.read_csv('./eIF5AvsWT_EC.DEG.all.csv')

# # Select columns for experimental and control groups
# group_a_columns = [col for col in data.columns if 'SHEF1' not in col and 'fpkm' in col]
# group_b_columns = [col for col in data.columns if 'SHEF1' in col and 'fpkm' in col]

# # Calculate averages for each group
# data['avg_group_a'] = data[group_a_columns].mean(axis=1)
# data['avg_group_b'] = data[group_b_columns].mean(axis=1)

# # Compute deviations from group averages
# for col in group_a_columns + group_b_columns:
#     data[col + '_dev'] = data[col] - data['avg_group_' + ('a' if col in group_a_columns else 'b')]

# # Prepare data for heatmap
# deviation_columns = [col + '_dev' for col in group_a_columns + group_b_columns]
# deviation_data = data[deviation_columns]

# # Select the top 100 genes based on absolute average deviation
# top_100_genes = deviation_data.abs().mean(axis=1).nlargest(100).index
# deviation_data_top_100 = deviation_data.loc[top_100_genes]

# # Cluster and visualize
# clustered_heatmap = clustermap(deviation_data_top_100, method='ward', metric='euclidean', cmap='coolwarm', center=0, vmin=-1, vmax=1, figsize=(12, 10))
# plt.title('Clustered Deviation from Average Gene Expression (Range -2 to 2)')
# plt.show()



import pandas as pd
import numpy as np

# Load the data
file_path = './heatmap.csv'  # Adjust the file path accordingly
data = pd.read_csv(file_path)

# Ensure there's a gene name column, if not you might need to adjust the column name
assert 'gene_name' in data.columns, "Data does not include 'gene_name' column."

# Filter columns for FPKM values and include gene names for grouping
fpkm_columns = [col for col in data.columns if 'SHEF' in col]

# Apply log2 transformation to FPKM values with an offset of 1 to avoid log(0)
data[fpkm_columns] = np.log2(data[fpkm_columns] + 1)

# Group data by 'gene_description', calculate mean transformed FPKM for each description, and collect gene names
grouped_data = data.groupby('gene_description').agg({**{col: 'mean' for col in fpkm_columns}, 'gene_name': lambda x: list(x)})

# Select the top 50 gene descriptions based on average expression
top_gene_groups = grouped_data[fpkm_columns].mean(axis=1).nlargest(200).index
top_gene_groups_data = grouped_data.loc[top_gene_groups]

# Convert the top gene groups data to JSON format for visualization
json_data = top_gene_groups_data.to_json(orient='index')

# Write JSON data to a file
json_file_path = 'heatmap_data.json'  # Specify the output JSON file path
with open(json_file_path, 'w') as file:
    file.write(json_data)


print(f"Data written to {json_file_path}.")
