<script>
    import Header from './header/Header.svelte'
    import Nav from './nav/Nav.svelte'
    // import Footer from './footer/Footer.svelte'
    import Main from './main/Main.svelte'

    let headerObj = {
            'position': 'sticky',
            'top': '0',
            'height': '4rem',
            'margin': '',
            'padding': 'var(--s-md) var(--s-md) var(--s-md) var(--s-md)',
        },
        navObj = {
            'position': 'sticky',
            'top': `${headerObj['height']}`,
            'width': '16rem',
            'height': `calc(100vh - ${headerObj['height']})`,
            'margin': `${headerObj['height']} 0 0 0`,
            'padding': 'var(--s-md) var(--s-md) var(--s-md) var(--s-md)',
        },
        footerObj = {
        },
        mainObj = {
            'padding': `calc(${headerObj['height']} + var(--s-md)) var(--s-md) var(--s-md) calc(${navObj['width']} + var(--s-md))`,
        }


    function createStyleString(obj) {
        let styles = ''
        for(var key in obj)
            styles = `${styles} ${key}: ${obj[key]};`
        return styles
    }
</script>

<Main style={createStyleString(mainObj)} />
<!-- <Footer /> -->
<Nav style={createStyleString(navObj)} />
<Header style={createStyleString(headerObj)} />
