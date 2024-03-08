<script>
    import SectionDefault from "./default/Default.svelte"
    import SectionAccent from "./accent/Accent.svelte"

    let colorsObj={
        defaultObj: {
            namesArr: [ 'positive', 'negative' ],
            variablesObj: {
                "positive-lightness": 0,
                "positive-chroma": 0,
                "positive-hue": 0,
                "negative-lightness": 0,
                "negative-chroma": 0,
                "negative-hue": 0
            }
        },
        accentObj: {
            namesArr: [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ],
            variablesObj: {
                'lightness': 0, // from 0 to 1
                'lightness-offset': 0, // from 0 to 1
                'chroma': 0, // from 0 to 0.37
                'alfa': 0, // from 0 to 100
                'primary-hue': 0, // from 0 to 360
                'secondary-hue': 0, // from 0 to 360
                'info-hue': 0, // from 0 to 360
                'success-hue': 0, // from 0 to 360
                'warning-hue': 0, // from 0 to 360
                'error-hue': 0 // from 0 to 360
            }
        },
        baseObj: {
            "html-background-color": 'initial', // link to other variable
            "body-background-color": 'inherit', // link to other variable
            "body-c": 'inherit', // link to other variable
            "bsc": 'inherit' // link to other variable
        }
    }
</script>

<h1 id="colorPalette">Color palette</h1>
<article>
    <p>
        The S4 OKLCH Color Picker help to change current theme.
    </p>
    <!-- {JSON.stringify(colorsObj)} -->
    <SectionDefault bind:defaultColorsObj={colorsObj.defaultObj}/>
    <SectionAccent bind:accentColorsObj={colorsObj.accentObj} />
</article>
