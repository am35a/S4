<script>
    import Precode from 'component/Precode.svelte'

    let spacingPropertiesObj={
            'all': '--',
            'x axis': '-x--',
            'y axis': '-y--',
            'top': '-top--',
            'right': '-right--',
            'bottom': '-bottom--',
            'left': '-left--',
        },
        spacingProperty = spacingPropertiesObj['all'],
        spacingSizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
</script>

<section>
    <h3 id="margin">Margin</h3>
    <p>
        Classes with the <b>margin(-side)--(axis-)(size)</b> pattern set the margin area on all four sides
        of the element, the axes, and on each side separately. To disable margin use the
        <b>margin(-side)--(axis-)none</b> classes and for auto margin use the 
        <b>margin(-side)--(axis-)auto</b> classes.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico" style="--ico-image: url(/icons/info-circle.svg);"></span>
            Pay attentions! The <b>--margin(-side)(--axis)</b> variables is adaptive for <b>margin(-side)(--axis)</b>.
            The list of prefixes available on the <a href="/core#map">Core</a> page.
        </div>
        <div class="display--grid gap--md">
            <b>Size</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                {#each Object.entries(spacingPropertiesObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={spacingProperty === value}
                        on:click={() => spacingProperty = value}
                        disabled={spacingProperty === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--lg">
            <div class="display--grid gap--md">
                <b>Preview</b>
                <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                    <div class="display--grid grid-template-columns--4 align-items--start gap--xs">
                        {#each spacingSizes as value}
                            <div class="background-color--negative-10">
                                <div class="background-color--negative-10 padding-x--xs padding-y--xxs margin{spacingProperty}{value}">#{spacingProperty}{value}</div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div class="margin${spacingProperty}#"> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>