import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import Header from '../components/Header'
import FullBanner from '../components/FullBanner'


export default function Index(){
    return (
        <>
            <Head>
                <title>HacodeLab</title>
                <link rel="shortcut icon" href="/images/favicon.png" />
            </Head>
            <CssBaseline />
            <Header />
            <FullBanner />
        </>
    )
}