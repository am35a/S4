<script>
    import { appConsole } from 'src/store/console'

    import ArticleAccentColors from './accent/AccentColors.svelte'

    let defaultColorsObj = {
            "positive": 0,
            "positive-chroma": 0,
            "positive-hue": 0,
            "negative": 0,
            "negative-chroma": 0,
            "negative-hue": 0
        },
        accentColorsObj = {
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
        },
        baseColorsObj = {
            "html-bgc": 'initial', // link to other variable
            "body-bgc": 'inherit', // link to other variable
            "body-c": 'inherit', // link to other variable
            "bsc": 'inherit' // link to other variable
        }

    const root = document.querySelector('html')
    let computedRoot

    function getCSSVarValues(obj) {
        for (const key of Object.keys(obj))
            obj[key] = computedRoot.getPropertyValue(`--${key}`).trim()
    }
    $: if ($appConsole['isWindowLoad']) {
        computedRoot = getComputedStyle(root)
        getCSSVarValues(defaultColorsObj)
        getCSSVarValues(accentColorsObj)
        getCSSVarValues(baseColorsObj)
    }
</script>

<h1>Color palette</h1>
{#if $appConsole['isWindowLoad']}
    <ArticleAccentColors accentColorsObj={accentColorsObj} />
{/if}