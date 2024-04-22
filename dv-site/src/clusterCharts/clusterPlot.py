import pandas as pd
import matplotlib.pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage, fcluster
import seaborn as sns
import plotly.express as px


# Load your dataset
# data = pd.read_csv('subcluster_3.csv')

import pandas as pd
import plotly.express as px
import numpy as np

# Load the data
data = pd.read_csv('subcluster_2.xls.csv')

# Columns that contain SHEF data
shef_columns = [col for col in data.columns if col.startswith('SHEF')]

# Randomly sample a subset of genes for a cleaner visualization
sampled_data = data.sample(n=1000, random_state=100) if len(data) > 100 else data

# Calculate the mean for each SHEF column and add it as a new row
# Calculate the mean for each SHEF column and add it as a new row
mean_values = np.log2(sampled_data[shef_columns] + 1).mean(axis=0)  # Calculate mean across axis 0
mean_df = pd.DataFrame([mean_values], columns=shef_columns)  # Create DataFrame with mean values
mean_df['gene_name'] = 'Mean Expression'
sampled_with_mean = pd.concat([sampled_data, mean_df], ignore_index=True)

# Interpolate missing values in the data
sampled_with_mean_interpolated = sampled_with_mean.interpolate(method='linear')

# Prepare data for Plotly Express
plot_data_interpolated = pd.melt(sampled_with_mean_interpolated, id_vars='gene_name', value_vars=shef_columns, var_name='SHEF Index', value_name='Expression Level')

# Create the line plot with interpolated data
fig_interpolated = px.line(plot_data_interpolated, x='SHEF Index', y='Expression Level', color='gene_name', title='')

# Update traces to adjust styles based on gene_name
for trace in fig_interpolated.data:
    if trace.name == "Mean Expression":
        trace.line = dict(color='blue', width=3)  # Bright blue and thicker line for mean
        trace.mode = 'lines+markers'  # Add markers to the mean line

    else:
        trace.line.color = 'rgba(200,200,200,0.5)'  # Make other genes more opaque

# Adjust the layout as needed
fig_interpolated.update_layout(
    showlegend=False,
    autosize=True,
    margin=dict(t=50, l=50, b=100, r=50),
    xaxis_title="SHEF Index",
    yaxis_title="centered log2(fpkm + 1)",
    legend_title="Gene Name",
    plot_bgcolor='rgba(0,0,0,0)'  # Optional: makes the plot background transparent
)

# Save the figure as HTML
fig_interpolated.write_html('sampled_data_with_mean_styled.html', full_html=False, include_plotlyjs='cdn')


# Prepare data for Plotly Express
# plot_data = pd.melt(sampled_with_mean, id_vars='gene_name', value_vars=shef_columns, var_name='SHEF Index', value_name='Expression Level')

# # Create the line plot
# fig = px.line(plot_data, x='SHEF Index', y='Expression Level', color='gene_name', title='')

# # Update traces to adjust styles based on gene_name
# for trace in fig.data:
#     if trace.name == "Mean Expression":
#         trace.line = dict(color='blue', width=3)  # Bright blue and thicker line for mean
#         trace.mode = 'lines+markers'  # Add markers to the mean line

#     else:
#         # trace.opacity = 0.3  # Set opacity to 0.4 for non-mean expression traces
        
#         hoverinfo='none',
#         # trace.hover = "none"
#         trace.line.color = 'rgba(200,200,200,0.5)'  # Make other genes more opaque

# # Adjust the layout as needed
# fig.update_layout(
#     # hoverinfo=None,
#     showlegend=False,
#     autosize=True,
#     margin=dict(t=50, l=50, b=100, r=50),
#     xaxis_title="SHEF Index",
#     yaxis_title="centered log2(fpkm + 1)",
#     legend_title="Gene Name",
#     plot_bgcolor='rgba(0,0,0,0)'  # Optional: makes the plot background transparent
    
# )

# # Save the figure as HTML, which is embeddable in an iframe
# fig.write_html('sampled_data_with_mean_styled.html', full_html=False, include_plotlyjs='cdn')


# # Select only the SHEF columns for clustering
# shef_columns = [col for col in data.columns if "SHEF" in col]
# shef_data = data[shef_columns]

# # Perform hierarchical clustering using the Ward method
# linked = linkage(shef_data, method='ward')

# # Determine clusters (cutoff can be adjusted)
# cluster_assignments = fcluster(linked, t=10, criterion='maxclust')

# # Adding cluster assignment to the original data
# data['Cluster'] = cluster_assignments

# # Plot line plots for each cluster
# unique_clusters = data['Cluster'].unique()
# # for cluster in unique_clusters:
# #     plt.figure(figsize=(10, 6))
# #     cluster_data = data[data['Cluster'] == cluster][shef_columns]
    
# #     # Transpose cluster_data for correct formatting in lineplot
# #     cluster_data_transposed = cluster_data.T.reset_index()
# #     cluster_data_transposed = cluster_data_transposed.melt(id_vars='index', var_name='Gene', value_name='SHEF Value')
    
# #     sns.lineplot(data=cluster_data_transposed, x='index', y='SHEF Value', hue='Gene', dashes=False, palette='tab10')
# #     plt.title(f'Line Plot for Cluster {cluster}')
# #     plt.xlabel('Sample')
# #     plt.ylabel('SHEF Value')
# #     plt.legend(title='Gene', bbox_to_anchor=(1.05, 1), loc='upper left')
# #     plt.tight_layout()
# #     plt.show()

# # Save the data with cluster assignments to a JSON file
# data.to_json('clustered_data.json', orient='records')
