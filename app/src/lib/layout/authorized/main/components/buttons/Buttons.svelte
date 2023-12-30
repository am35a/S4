<script lang="ts">
    import Icon from 'component/Icon.svelte'
    import Button from 'component/Button.svelte'
    import Precode from 'component/Precode.svelte'

    let fontSizesObj: { [key: string]: any } = {
        Default: '' as string,
        xxs: 'fs-xxs' as string,
        xs: 'fs-xs' as string,
        sm: 'fs-sm' as string,
        md: 'fs-md' as string,
        lg: 'fs-lg' as string,
        xl: 'fs-xl' as string,
        xxl: 'fs-xxl' as string,
        xxxl: 'fs-xxxl' as string
    }
    let fontSize: string = 'Default'

    let buttonsObj: { [key: string]: any } = {
        typeObj: {
            Default: '' as string,
            Submit: 'submit' as string,
            Reset: 'reset' as string
        },
        variantsObj: {
            Default: '' as string,
            Alt: 'alt' as string,
            Outline: 'outline' as string
        },
        colorsObj: {
            Default: '' as string,
            Primary: '-primary' as string,
            Secondary: '-secondary' as string,
            Info: '-info' as string,
            Success: '-success' as string,
            Warning: '-warning' as string,
            Error: '-error' as string,
        },
        iconObj: {
            Default: 0 as number,
            Both: 1 as number,
            Icon: 2 as number
        }
    }
    let buttonType: string = 'Default'
    let buttonVariant: string = 'Default'
    let buttonColor: string = 'Default'
    let buttonIcon: string = 'Default'

    let buttonClass: string = ''
    $: {
        buttonClass = fnButtonClass()

        if (fontSize !== 'Default')
            buttonClass = `${buttonClass} ${fontSizesObj[fontSize]}`

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

<article>
    <h2 id="buttons">Buttons</h2>
    <p>S4 buttons have three variants and seven colors. From these views, you can get any other kind of buttons.</p>

    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Variants</b>
            <div class="d-flex fw-wrap g-3">
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
            <b>Colors</b>
            <div class="d-flex fw-wrap g-3">
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
            <b>Icon</b>
            <div class="d-flex fw-wrap g-3">
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
        <div class="d-grid g-4">
            <b>Sizes</b>
            <div class="d-flex fw-wrap g-3 ai-center">
                {#each Object.entries(fontSizesObj) as [key, value]}
                    <button
                        on:click={() => fontSize = key}
                        class="btn {value}"
                        class:active = {fontSize === key}
                        type="button"
                        disabled = {fontSize === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>Types</b>
            <div class="d-flex fw-wrap g-3">
                {#each Object.entries(buttonsObj.typeObj) as [key, value]}
                    <button
                        on:click={() => buttonType = key}
                        class="btn btn{value}"
                        class:active = {buttonType === key}
                        type="button"
                        disabled = {buttonType === key}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="d-flex g-4 fw-wrap jc-evenly p-4 bgc-positive br">
            <div class="d-grid cols-2 g-3">
                <b class="js-end as-center">Default</b>
                <div>
                    <button class="btn {buttonClass}" type="button">
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <b class="js-end as-center">Active</b>
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
                <b class="js-end as-center">Disabled</b>
                <div>
                    <button class="btn {buttonClass}" type="button" disabled>
                        {#if buttonsObj.iconObj[buttonIcon]}
                            <span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
                        {/if}
                        {#if buttonsObj.iconObj[buttonIcon] !== 2}
                            Button
                        {/if}
                    </button>
                </div>
                <b class="js-end as-center">Active & Disabled</b>
                <div>
                    <button class="btn {buttonClass} active" type="button" disabled>
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
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode>
                {
`// Default
<button class="btn ${buttonClass}" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}">${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
        
// Active
<button class="btn ${buttonClass} active" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}">${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
        
// Disabled
<button class="btn ${buttonClass}" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}" disabled>${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
        
// Active & disabled
<button class="btn ${buttonClass} active" type="${buttonsObj.typeObj[buttonType] ? buttonsObj.typeObj[buttonType] : 'button'}" disabled>${buttonsObj.iconObj[buttonIcon] ? '<span class="ico ico-ghost" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</button>
`
                }
            </Precode>
        </div>
        <div class="d-grid g-4">
            <b>Svelte</b>
            <Precode>
                {
`// Import
${buttonsObj.iconObj[buttonIcon] !== 0 ? 'import Button from "component/Button.svelte"' : ''}
import Icon from "component/Icon.svelte"

// Default
<Button ${buttonClass ? 'class="' + buttonClass + '"' : ''} ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''}>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
        
// Active
<Button class="${buttonClass} active" ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''}>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
        
// Disabled
<Button ${buttonClass ? 'class="' + buttonClass + '"' : ''}  ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''} disabled>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
        
// Active & disabled
<Button class="${buttonClass} active"  ${buttonsObj.typeObj[buttonType] ? 'type="' + buttonsObj.typeObj[buttonType] + '"' : ''} disabled>${buttonsObj.iconObj[buttonIcon] ? '<Icon name="ghost"/>' : ''}${buttonsObj.iconObj[buttonIcon] !== 2 ? 'Button' : ''}</Button>
`
                }
            </Precode>
        </div>
    </div>
</article>