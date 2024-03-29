import pandas as pd
import plotly.graph_objects as go
import numpy as np

def create_bar_chart(csv_path, output_html_path):
    data = pd.read_csv(csv_path, sep='\t')  # Load the data

    # Calculate the top 10 terms based on enrichment score
    top_terms = data.nlargest(10, 'enrichment score')

    # Create the bar chart
    fig = go.Figure(data=[
            go.Bar(
                y=top_terms['term description'],  # Swap x and y
                x=top_terms['enrichment score'],
                orientation='h',  # Specify horizontal bars
                marker_color='skyblue',
                opacity=0.75
            )
        ])

    # Update layout for a better look
    fig.update_layout(
        # title='Top 10 Terms by Enrichment Score',
        # yaxis_title='Term Description',  # Swap xaxis and yaxis titles
        xaxis_title='Enrichment Score',
        plot_bgcolor='white',
                xaxis=dict(
            showgrid=True, 
            gridwidth=1, 
            gridcolor='lightgrey',
            griddash='dot',  # Make grid lines dotted
            ticks='outside',  # Show ticks outside the plotting area
            tickwidth=1,  # Tick line width
            tickcolor='black'  # Tick line color
        ),
        yaxis=dict(
            showgrid=True, 
            gridwidth=1, 
            gridcolor='lightgrey', 
            autorange='reversed',
            griddash='dot',  # Make grid lines dotted
            ticks='outside',  # Show ticks outside the plotting area
            tickwidth=1,  # Tick line width
            tickcolor='black'  # Tick line color
        )
    )

    # Write to HTML
    fig.write_html(output_html_path, include_plotlyjs='cdn')

# Example usage
csv_path = 'DHS_DOHHvsTar4_EC/enrichment.KEGG.tsv'
output_html_path = 'DHS_DOHHvsTar4_EC/enrichment_scores_chart.html'
create_bar_chart(csv_path, output_html_path)
