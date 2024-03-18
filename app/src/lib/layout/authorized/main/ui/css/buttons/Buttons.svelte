<script lang="ts">
    let buttonVariantArr: string[] = ['', 'alt-', 'outline-']
    // let buttonTypesObj={
    //     default: '',
    //     mute: 'mute',
    //     outline: '-d'
    // }

    let buttonSizeArr: string[] = ['btn-xxl', 'btn-xl', 'btn-lg', 'btn-md', 'btn-sm', 'btn-xs', 'btn-xxs']
    let buttonSize: string = buttonSizeArr[3]

    let buttonBorderArr: string[] = ['border-radius--0', 'border-radius--xxs', 'border-radius--xs', 'border-radius--sm', 'border-radius--md', 'border-radius--lg', 'border-radius--xl', 'border-radius--xxl', 'border-radius--xxxl', 'border-radius--pill']
    let buttonBorder: string = buttonBorderArr[3]
</script>

<section class="display--grid g-5">

    <h3 id="buttons">Buttons</h3>

    <div class="display--flex flex-wrap--wrap g-4 justify-content--evenly align-items--center p-4 background-color--positive border-radius--lg flex" style="--flex-grow: 1;">
        <p>
            All button sizes, borders, corners radius depend on the font size. Don't think the S4 only has only seven sizes, there are much. Make free your design desire and try to place one size element into another size - it's magic! Try playing with the buttons.
        </p>
    </div>

    <div class="display--grid g-4 justify-item--center pb-4 border-bottom">
        <div class="display--flex g-4 flex-wrap--wrap justify-content--center align-items--center">
            {#each buttonSizeArr as values }
                <button
                    class="btn btn-primary btn-ico {buttonBorder} {values} {buttonSize === values ? 'active' : ''}"
                    on:click={() => buttonSize = values}
                    disabled={buttonSize === values}
                ><span class="ico" style="--ico-image: url(/icons/empty.svg);">&nbsp;</span></button>
            {/each}
        </div>
        <div>
            <span class="ico" style="--ico-image: url(/icons/arrows-down-up.svg);"></span>
        </div>
        <div class="display--flex g-4 flex-wrap--wrap justify-content--center align-items--center">
            {#each buttonBorderArr as values}
                <button
                    class="btn btn-primary btn-ico {buttonSize} {values} {buttonBorder === values ? 'active' : ''}"
                    on:click={() => buttonBorder = values}
                    disabled={buttonBorder === values}
                ><span class="ico" style="--ico-image: url(/icons/empty.svg);">&nbsp;</span></button>
            {/each}
        </div>
    </div>

    <div class="display--grid g-4">

        <div class="display--flex g-4 flex-wrap--wrap justify-content--evenly p-4 background-color--positive border-radius--lg">
            <div class="display--grid g-3">
                <button class="btn {buttonBorder} {buttonSize}" type="button">Default</button>
                <button class="btn {buttonBorder} {buttonSize} active" type="button">Active</button>
                <button class="btn {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                <button class="btn {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
            </div>
            <div class="display--grid g-3">
                <button class="btn btn-alt {buttonBorder} {buttonSize}" type="button">Default</button>
                <button class="btn btn-alt {buttonBorder} {buttonSize} active" type="button">Active</button>
                <button class="btn btn-alt {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                <button class="btn btn-alt {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
            </div>
            <div class="display--grid g-3">
                <button class="btn btn-outline {buttonBorder} {buttonSize}" type="button">Default</button>
                <button class="btn btn-outline {buttonBorder} {buttonSize} active" type="button">Active</button>
                <button class="btn btn-outline {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                <button class="btn btn-outline {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
            </div>
        </div>

        {#each buttonVariantArr as variant}
            <div class="display--flex g-4 flex-wrap--wrap justify-content--evenly p-4 background-color--positive border-radius--lg">
                <div class="display--grid g-3">
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize}" type="button">Primary</button>
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize} active" type="button">Active</button>
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                    <button class="btn btn-{variant}primary {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
                </div>
                <div class="display--grid g-3">
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize}" type="button">Secondary</button>
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize} active" type="button">Active</button>
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize}" disabled type="button">Disabled</button>
                    <button class="btn btn-{variant}secondary {buttonBorder} {buttonSize} active" disabled type="button">Active / Disabled</button>
                </div>
                <div class="display--grid g-3">
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                    <button class="btn btn-{variant}info {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/send.svg);">&nbsp;</span>
                        Send
                    </button>
                </div>
                <div class="display--grid g-3">
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                    <button class="btn btn-{variant}success {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/check.svg);">&nbsp;</span>
                        Confirm
                    </button>
                </div>
                <div class="display--grid g-3">
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                    <button class="btn btn-{variant}warning {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/x.svg);">&nbsp;</span>
                        Discard
                    </button>
                </div>
                <div class="display--grid g-3">
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize}" type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize} active" type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize}" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                    <button class="btn btn-{variant}error {buttonBorder} {buttonSize} active" disabled type="button">
                        <span class="ico" style="--ico-image: url(/icons/trash.svg);">&nbsp;</span>
                        Remove
                    </button>
                </div>
            </div>
        {/each}
        
    </div>

    <div class="display--flex p_flex-direction--column g-4 p-4 background-color--positive border-radius--lg">
        <p class="mb-0">
            Icon buttons like other button follow the same rules. Also they are perfect support for icon sets like font awesome, google fonts, ect.
        </p>
        <div class="display--flex justify-content--evenly g-3 align-items--center">
            <button class="btn btn-ico btn-primary {buttonBorder} {buttonSize}" type="button">
                <span class="ico" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
            </button>
            <button class="btn btn-ico btn-alt-primary {buttonBorder} {buttonSize}" type="button">
                <span class="ico" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
            </button>
            <button class="btn btn-ico btn-outline-primary {buttonBorder} {buttonSize}" type="button">
                <span class="ico" style="--ico-image: url(/icons/ghost.svg);">&nbsp;</span>
            </button>
        </div>
    </div>

</section>