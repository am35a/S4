<script>
    import Icon from 'component/Icon.svelte'
    import Precode from 'component/Precode.svelte'
    import Button from 'component/Button.svelte'
    import Input from 'component/Input.svelte'

    let iconSizeObj={
        'none': '',
        'small xx': 'fs-xxs',
        'small x': 'fs-xs',
        'small': 'fs-sm',
        'medium': 'fs-md',
        'large': 'fs-lg',
        'large x': 'fs-xl',
        'large xx': 'fs-xxl',
        'large xxx': 'fs-xxxl',
        'expand': 'w-100 h-100'
    }
    let iconSize = '',
        iconBgColor = '',
        iconColor = ''

    function toggleColor(switchColor) {
        switch (switchColor) {
            case 'bgColor':
                iconColor = ''
                break
            case 'color':
                iconBgColor = ''
                break
        }
    }

    let preCodeObj={
        classes: '',
        styles: ''
    }

    $: iconSize || iconBgColor || iconColor, preCode()
    
    function preCode() {
        preCodeObj.classes = preCodeObj.styles = ''

        if (iconSize)
            preCodeObj.classes += ` ${iconSize}`

        if (iconBgColor) {
            preCodeObj.classes += ` background-color`
            preCodeObj.styles += ` --background-color:${iconBgColor};`
        }

        if (iconColor) {
            preCodeObj.classes += ` c`
            preCodeObj.styles += ` --c:${iconColor};`
        }
    }
</script>

<section>
    <h2 id="buttons">Icons</h2>
    <div class="d-grid g-5">
        <p>
            Lightweight <Icon /> responsive vector icons with cache available.
            The  icon sizes directly depend on the font size and the container in which the icon is placed.
            Colors are changed in two ways - using the <b>background-color--...</b> or <b>c-...</b> classes.
        </p>
        <div class="alert alert-warning justify-self--start">
            <span class="ico fs-xl" style="--ico-image: url(/icons/alert-triangle.svg);"></span>
            Pay attention! The <b>background-color--...</b> and <b>c-...</b> are incompatible in one case.
        </div>

        <div class="d-grid g-4">
            <b>Background color</b>
            <div>
                <Input
                    bind:value={iconBgColor}
                    on:change={() => toggleColor('bgColor')}
                    type="color"
                />
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Color</b>
            <div>
                <Input
                    bind:value={iconColor}
                    on:change={() => toggleColor('color')}
                    type="color"
                />
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Size</b>
            <div class="d-inline-flex fw-wrap g-3">
                {#each Object.entries(iconSizeObj) as [key, value]}
                    <Button
                        class={iconSize === value ? 'active' : ''}
                        on:click={() => iconSize = value}
                        disabled={iconSize === value}
                    >{key}</Button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive br-md h" style="--h: 10em">
                <Icon
                    class="{iconSize} m-auto {iconBgColor ? 'background-color' : ''} {iconColor ? 'c' : ''}"
                    style="{iconBgColor ? `--background-color:${iconBgColor};` : ''} {iconColor ? `--c:${iconColor};` : ''}"
                    name="ghost"
                />
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Svelte</b>
            <Precode>
                    {
`<Icon ${preCodeObj.classes ? `class="${preCodeObj.classes}"` : ''}${preCodeObj.styles ? ` styles="${preCodeObj.styles}"` : ''} name="ghost" />
`
                    }
            </Precode>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                    {
`<span
    class="ico${preCodeObj.classes}"
    style="--ico-image:url(ghost.svg);${preCodeObj.styles}"
></span>
`
                    }
            </Precode>
        </div>
    </div>
</section>
