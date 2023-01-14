import Head from "next/head";

const MetaComponent = ({ title, description, keywords, url, schemaData }) => (
    <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="google-site-verification" content="Ao8IvTUt4_ca5KfEOHEbknJCJogkxdlWgjlPz1I7AMg" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content={title}/>
        <meta property="og:image" content="https://99foto.pl/icons/99foto.webp" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <link rel="author" href="https://plus.google.com/u/0/+TomaszProkop_99FOTO" />
        <link rel="publisher" href="https://plus.google.com/u/0/+TomaszProkop_99FOTO" />
        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href="https://99foto.pl/icons/favicon.ico" />
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </Head>
);

export default MetaComponent;