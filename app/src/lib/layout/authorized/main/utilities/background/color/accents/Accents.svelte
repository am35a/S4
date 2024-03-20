<script>
    let accentsArr = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ],
        accentsExtraObj={
            light: '-l',
            default: '',
            dark: '-d',
            mute: '-m'
        },
        accentExtra = accentsExtraObj.default
</script>

<div>
    <h4 id="accents">Accents</h4>
    <p>
        The <b>background-color--...-l</b> and <b>background-color--...-d</b> classes set light or dark
        shades for accent background colors. Also avaliable the mute - <b>background-color--...-m</b>
        background colors.
    </p>
    <div class="display--grid g-5">
        <div class="display--grid g-4">
            <b>Colors</b>
            <div class="display--flex flex-wrap--wrap g-2">
                {#each Object.entries(accentsExtraObj) as [key, value]}
                    <button
                        class="btn"
                        class:active={accentExtra === value}
                        on:click={() => accentExtra = value}
                        disabled={accentExtra === value}
                    >{key}</button>
                {/each}
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div class="display--grid g-3 grid-template-columns--2">
                    {#each accentsArr as item }
                        <div
                            class:c-negative={accentExtra === '-m'}
                            class="background-color--{item}{accentExtra} p-4 c-positive"
                        >
                            <!-- {item} {Object.keys(accentsExtraObj).find(key => accentsExtraObj[key] === accentExtra)} color -->
                            background-color--{item}{accentExtra}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
