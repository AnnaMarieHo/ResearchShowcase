import pandas as pd
import plotly.graph_objects as go
import numpy as np

def create_scatterplot(csv_path, output_html_path):
    data = pd.read_csv(csv_path)

    # Calculate -log10(padj)
    data['-log10(padj)'] = -np.log10(data['padj'])

    # Define thresholds
    p_value_threshold = -np.log10(0.05)

    # Categorize points based on significance and direction of regulation
    data['Category'] = 'Non-Significant'
    data.loc[(data['-log10(padj)'] >= p_value_threshold) & (data['log2FoldChange'] > 0), 'Category'] = 'Up Regulated'
    data.loc[(data['-log10(padj)'] >= p_value_threshold) & (data['log2FoldChange'] < 0), 'Category'] = 'Down Regulated'

    fig = go.Figure()

    # Define hover templates
    hovertemplate_non_sig = "gene_name=%{customdata[0]}<br>-log10(padj)=%{y}<br>log2FoldChange=%{x}<br>gene_id=%{customdata[1]}<extra></extra>"
    hovertemplate_sig = "gene_name=%{customdata[0]}<br>-log10(padj)=%{y}<extra></extra>"

    # Plot each category with a different hovertemplate
    for category, color, hovertemplate in [
        ('Non-Significant', 'lightslategray', hovertemplate_non_sig),
        ('Up Regulated', 'blue', hovertemplate_sig),
        ('Down Regulated', 'red', hovertemplate_sig)]:

        category_data = data[data['Category'] == category]

        fig.add_trace(go.Scattergl(
            x=category_data['log2FoldChange'],
            y=category_data['-log10(padj)'],
            mode='markers',
            marker=dict(color=color),
            customdata=np.stack((category_data['gene_name'], category_data['gene_id']), axis=-1),
            hovertemplate=hovertemplate,
            name=category
        ))

    # Customize gridlines and make dotted lines thinner
    fig.update_layout(
        xaxis=dict(showgrid=True, gridwidth=0.5, gridcolor='lightgrey'),
        yaxis=dict(showgrid=True, gridwidth=0.5, gridcolor='lightgrey'),
        plot_bgcolor='white'
    )

    # Add thinner horizontal and vertical dashed lines for significance thresholds
    fig.add_hline(y=p_value_threshold, line_dash="dash", line_width=1, line_color="grey")
    fig.add_vline(x=0, line_dash="dash", line_width=1, line_color="grey")

    fig.update_layout(
        autosize=True,
        margin=dict(l=20, r=20, t=20, b=20),
        xaxis_title="Log2 Fold Change",
        yaxis_title="-Log10(padj)"
    )

    fig.write_html(output_html_path, include_plotlyjs='cdn')

if __name__ == "__main__":

     create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.DEG.all.html')
     create_scatterplot('DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.csv', 'DHS_DOHHvsWT_EC\DHS_DOHHvsWT_EC.all.cancer.html')

     create_scatterplot('DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.DEG.all.csv', 'DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.DEG.all.html')
     create_scatterplot('DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.all.cancer.csv', 'DHS_DOHHvsTar4_EC\DHS_DOHHvsTar4_EC.all.cancer.html')

     create_scatterplot('eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.DEG.all.csv', 'eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.DEG.all.html')
     create_scatterplot('eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.all.cancer.csv', 'eIF5A_DDvsDHS_DOHH\eIF5A_DDvsDHS_DOHH.all.cancer.html')

     create_scatterplot('eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.DEG.all.csv', 'eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.DEG.all.html')
     create_scatterplot('eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.all.cancer.csv', 'eIF5A_DDvseIF5A\eIF5A_DDvseIF5A.all.cancer.html')

     create_scatterplot('eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.DEG.all.csv', 'eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.DEG.all.html')
     create_scatterplot('eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.all.cancer.csv', 'eIF5A_DDvsK50A_DD\eIF5A_DDvsK50A_DD.all.cancer.html')

     create_scatterplot('eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.DEG.all.csv', 'eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.DEG.all.html')
     create_scatterplot('eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.all.cancer.csv', 'eIF5A_DDvsTar4_EC\eIF5A_DDvsTar4_EC.all.cancer.html')

     create_scatterplot('eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.DEG.all.csv', 'eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.DEG.all.html')
     create_scatterplot('eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.all.cancer.csv', 'eIF5A_DDvsWT_EC\eIF5A_DDvsWT_EC.all.cancer.html')

     create_scatterplot('eIF5AvsTar4_EC\eIF5AvsTar4_EC.DEG.all.csv', 'eIF5AvsTar4_EC\eIF5AvsTar4_EC.DEG.all.html')
     create_scatterplot('eIF5AvsTar4_EC\eIF5AvsTar4_EC.all.cancer.csv', 'eIF5AvsTar4_EC\eIF5AvsTar4_EC.all.cancer.html')

     create_scatterplot('eIF5AvsWT_EC\eIF5AvsWT_EC.DEG.all.csv', 'eIF5AvsWT_EC\eIF5AvsWT_EC.DEG.all.html')
     create_scatterplot('eIF5AvsWT_EC\eIF5AvsWT_EC.all.cancer.csv', 'eIF5AvsWT_EC\eIF5AvsWT_EC.all.cancer.html')

     create_scatterplot('K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.DEG.all.csv', 'K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.DEG.all.html')
     create_scatterplot('K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.all.cancer.csv', 'K50A_DDvsDHS_DOHH\K50A_DDvsDHS_DOHH.all.cancer.html')

     create_scatterplot('K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.DEG.all.csv', 'K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.DEG.all.html')
     create_scatterplot('K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.all.cancer.csv', 'K50A_DDvsTar4_EC\K50A_DDvsTar4_EC.all.cancer.html')

     create_scatterplot('K50A_DDvsWT_EC\K50A_DDvsWT_EC.DEG.all.csv', 'K50A_DDvsWT_EC\K50A_DDvsWT_EC.DEG.all.html')
     create_scatterplot('K50A_DDvsWT_EC\K50A_DDvsWT_EC.all.cancer.csv', 'K50A_DDvsWT_EC\K50A_DDvsWT_EC.all.cancer.html')

     create_scatterplot('Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.DEG.all.csv', 'Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.DEG.all.html')
     create_scatterplot('Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.all.cancer.csv', 'Tar4_ECvsWT_EC\Tar4_ECvsWT_EC.all.cancer.html')


