<script lang="ts">
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let buttonsObj = {
        variantsObj: {
            'Default': '' as string,
            'Alt': 'alt' as string,
            'Outline': 'outline' as string
        },
        colorsObj: {
            'Default': '' as string,
            'Primary': '-primary' as string,
            'Outline': '-secondary' as string,
            'Info': '-info' as string,
            "Success": '-success' as string,
            'Warning': '-warning' as string,
            'Error': '-error' as string,
        },
        iconObj: {
            'Default': 0 as number,
            'Both': 1 as number,
            'Icon': 2 as number
        }
    }
    let buttonVariant: string = 'Default'
    let buttonColor: string = 'Default'
    let buttonIcon: string = 'Default'

    let buttonClass: string = ''
    $: {
        buttonClass = fnButtonClass()

        if (buttonsObj.iconObj[buttonIcon] === 2)
            buttonClass = `${buttonClass} btn-ico`
    
        function fnButtonClass() {
            if (buttonsObj.variantsObj[buttonVariant] && buttonsObj.colorsObj[buttonColor])
                return `btn-${buttonsObj.variantsObj[buttonVariant]}${buttonsObj.colorsObj[buttonColor]}`
            else
                if (buttonsObj.variantsObj[buttonVariant])
                    return `btn-${buttonsObj.variantsObj[buttonVariant]}`
                else
                    if (buttonsObj.colorsObj[buttonColor])
                        return `btn${buttonsObj.colorsObj[buttonColor]}`
                    else
                        return ''    
        }
    }

</script>

<section>
    <h2 id="buttons">Buttons</h2>
    <p>S4 buttons have three variants and seven colors. From these views, you can get any other kind of buttons.</p>

    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <div>Variants</div>
            <div class="d-flex g-3">
                {#each Object.entries(buttonsObj.variantsObj) as [key, value]}
                    <button
                        on:click={() => buttonVariant = key}
                        class="btn btn-{value}"
                        class:active = {buttonVariant === key}
                        type="button"
                        disabled = {buttonVariant === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <div>Colors</div>
            <div class="d-flex g-3">
                {#each Object.entries(buttonsObj.colorsObj) as [key, value]}
                    <button
                        on:click={() => buttonColor = key}
                        class="btn btn{value}"
                        class:active = {buttonColor === key}
                        type="button"
                        disabled = {buttonColor === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <div>Icon</div>
            <div class="d-flex g-3">
                {#each Object.entries(buttonsObj.iconObj) as [key, value]}
                    <Button
                        class="{value === 2 ? 'btn-ico' : ''} {buttonIcon === key ? 'active' : ''}"
                        on:click={() => buttonIcon = key}
                        disabled = {buttonIcon === key}
                    >
                        {#if value}
                            <Icon name="ghost"/>
                        {/if}
                        {#if value !== 2}
                            {key}
                        {/if}
                    </Button>
                {/each}
            </div>
        </div>
        <div class="d-flex g-4 fw-wrap jc-evenly p-4 bgc-positive br">
            <div class="d-grid cols-2 g-3">
                <div class="js-end as-center">Default</div>
                <div>
                    <button class="btn {buttonClass}">
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <div class="js-end as-center">Active</div>
                <div>
                    <button class="btn {buttonClass} active">
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <div class="js-end as-center">Disabled</div>
                <div>
                    <button class="btn {buttonClass}" disabled>
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <div class="js-end as-center">Active & Disabled</div>
                <div>
                    <button class="btn {buttonClass} active" disabled>
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
            </div>
        </div>
        <Precode>
            {
`// Default
<button class="btn ${buttonClass}">${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
    
// Active
<button class="btn ${buttonClass} active">${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
    
// Disabled
<button class="btn ${buttonClass}" disabled>${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
    
// Active & disabled
<button class="btn ${buttonClass} active" disabled>${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
`
            }
        </Precode>
    </div>





    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Type</div>
        <div>
            <Button class="btn-primary" type="submit">Submit</Button>
            <Button class="btn-primary" type="reset">Reset</Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>
    
    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Size</div>
        <div>
            <Button class="btn-primary btn-xxs">Smallest</Button>
            <Button class="btn-primary btn-xs">Smaller</Button>
            <Button class="btn-primary btn-sm">Small</Button>
            <Button class="btn-primary btn-md">Medium</Button>
            <Button class="btn-primary btn-lg">Large</Button>
            <Button class="btn-primary btn-xl">Larger</Button>
            <Button class="btn-primary btn-xxl">Largest</Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>

    <!-- <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">With icon</div>
        <div>
            <Button class="btn-primary"><Icon name="ghost"/>On the left</Button>
            <Button class="btn-primary">On the right<Icon name="ghost"/></Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div>

    <div class="d-grid g-2">
        <div class="h4" aria-level={4} role="heading">Icon</div>
        <div>
            <Button class="btn-primary btn-ico btn-xxs"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-xs"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-sm"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-lg"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-xl"><Icon name="ghost"/></Button>
            <Button class="btn-primary btn-ico btn-xxl"><Icon name="ghost"/></Button>
        </div>
        <Precode>
            {
`...`
            }
        </Precode>
    </div> -->
    
</section>