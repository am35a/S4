<script lang="ts">
    import Header from './header/Header.svelte'
    import Nav from './nav/Nav.svelte'
    import Footer from './footer/Footer.svelte'
    import Main from './main/Main.svelte'

    let heightHeader: any = '4rem',
        withAside: any = '16rem'


    let headerObj = {
            'position': 'sticky' as string,
            'top': '0' as string,
            'height': '4rem' as string,
            'margin': '' as string,
            'padding': 'var(--s-md) var(--s-md) var(--s-md) var(--s-md)' as string,
        },
        navObj = {
            'position': 'sticky' as string,
            'top': `${headerObj['height']}` as string,
            'width': '16rem' as string,
            'height': `calc(100vh - ${headerObj['height']})` as string,
            'margin': `${headerObj['height']} 0 0 0` as string,
            'padding': 'var(--s-md) var(--s-md) var(--s-md) var(--s-md)' as string,
        },
        footerObj = {
        },
        mainObj = {
            'padding': `calc(${heightHeader} + var(--s-md)) var(--s-md) var(--s-md) calc(${navObj['width']} + var(--s-md))` as string,
        }


    function createStyleString(obj: any) {
        let styles = '' as string
        for(var key in obj)
            styles = `${styles} ${key}: ${obj[key]};`
        return styles
    }
</script>

<Main style={createStyleString(mainObj)} />
<!-- <Footer /> -->
<Nav style={createStyleString(navObj)} />
<Header style={createStyleString(headerObj)} />
