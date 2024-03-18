<script>
    import Precode from 'component/Precode.svelte'

    // let sidesArr = ['', 'top-', 'right-', 'bottom-', 'left-'],
    let widthObj = {
            Min: 'min',
            Thin: 'thin',
            Medium: 'medium',
            Thick: 'thick'
        },
        width = 'Min',
        isStyle = true
</script>

<section>
    <h3 id="width">Width</h3>
    <p>
        To change the border width use the:
        <!-- <span class="display--grid">
            {#each sidesArr as side }
                <b>border-{side}width--{Object.values(widthObj).slice(1).join('/')}</b>
            {/each}
        </span> -->
        <b>border-width--{Object.values(widthObj).slice(1).join('/')}</b>
        classes in combination with border styles. The <b>border-width--min</b> is not directly available,
        it is set automatically with the border style.
    </p>
    <div class="display--grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The classes <b>thin</b>, <b>medium</b> and <b>thick</b> are not dynamic, unlike <b>min</b>
            which depends on the font size.
        </div>
        <div class="alert alert-warning justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/alert-triangle.svg);"></span>
            If there are no border styles then the width does not matter as the border will be shown.
        </div>
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--border-width</b> variable of <b>border</b>, <b>border-width</b>,
            <b>border-...</b>, <b>border-...-width</b>  is adaptive. The list of prefixes available on the
            <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid g-4">
            <b>Sizes</b>
            <div class="display--flex fw-wrap g-3 align-items--center">
                {#each Object.entries(widthObj) as [key, value]}
                    <button
                        on:click={() => width = key}
                        class="btn"
                        class:active={width === key}
                        disabled={width === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Style</b>
            <div class="display--flex fw-wrap g-3 align-items--center">
                <button
                    on:click={() => isStyle = !isStyle}
                    class="btn"
                    class:active={isStyle}
                    disabled={isStyle}
                >With</button>
                <button
                    on:click={() => isStyle = !isStyle}
                    class="btn"
                    class:active={!isStyle}
                    disabled={!isStyle}
                >Without</button>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 -background-color--positive -border-radius--md">
                <div class="display--flex fw-wrap g-2 align-items--baseline">
                    <div class="
                        background-color--negative-10 p-4 border-width--{widthObj[width]}"
                        class:border-style--solid={isStyle}
                    >all sides</div>
                    <div class="
                        background-color--negative-10 p-4 border-width--{widthObj[width]}"
                        class:border-top-style--solid={isStyle}
                    >top side</div>
                    <div class="
                        background-color--negative-10 p-4 border-width--{widthObj[width]}"
                        class:border-right-style--solid={isStyle}
                    >right side</div>
                    <div class="
                        background-color--negative-10 p-4 border-width--{widthObj[width]}"
                        class:border-bottom-style--solid={isStyle}
                    >bottom side</div>
                    <div class="
                        background-color--negative-10 p-4 border-width--{widthObj[width]}"
                        class:border-left-style--solid={isStyle}
                    >left side</div>
                </div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode>
                {
`
<div class="border-width--${widthObj[width]} ${isStyle ? 'border-style--solid' : ''}"
    ...
>all sides</div>
<div class="border-width--${widthObj[width]} ${isStyle ? 'border-top-style--solid' : ''}"
    ...
>top side</div>
<div class="border-width--${widthObj[width]} ${isStyle ? 'border-right-style--solid' : ''}"
    ...
>right side</div>
<div class="border-width--${widthObj[width]} ${isStyle ? 'border-bottom-style--solid' : ''}"
    ...
>bottom side</div>
<div class="border-width--${widthObj[width]} ${isStyle ? 'border-left-style--solid' : ''}"
    ...
>left side</div>
`
                }
            </Precode>
        </div>
    </div>
</section>