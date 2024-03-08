<script>
    import Header from './header/Header.svelte'
    import Nav from './nav/Nav.svelte'
    // import Footer from './footer/Footer.svelte'
    import Main from './main/Main.svelte'

    // have to move all style to variables
    let headerObj={
            'position': 'sticky',
            'top': '0',
            'height': '4em',
            'padding-top': 'var(--size-2)',
            'padding-right': 'var(--size-2)',
            'padding-bottom': 'var(--size-2)',
            'padding-left': 'var(--size-2)',
        },
        navObj={
            'position': 'sticky',
            'top': `${headerObj['height']}`,
            'width': '16em',
            'height': `calc(100vh - ${headerObj['height']})`,
            'margin-top': `calc(${headerObj['height']} + var(--size-0))`,
            'margin-right': 'var(--size-0)',
            'margin-bottom': 'var(--size-0)',
            'margin-left': 'var(--size-0)',
            'padding-top': 'var(--size-0)',
            'padding-right': 'var(--size-2)',
            'padding-bottom': 'var(--size-2)',
            'padding-left': 'var(--size-2)',
        },
        footerObj={
        },
        mainObj={
            'padding-top': `calc(${headerObj['height']} + var(--size-2))`,
            'padding-right': 'var(--size-2)',
            'padding-bottom': 'var(--size-2)',
            'padding-left': `calc(${navObj['width']} + var(--size-2))`,
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
