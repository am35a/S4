<script lang="ts">
    import Precode from 'component/Precode.svelte'
</script>

<div>
    <h4 id="weight">Weight</h4>
    <p>
        To set a font weight have to use the <b>font-weight--...</b> classes.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="
                display--grid
                grid-template-columns--3
                gap--sm
                padding--sm
                background-color--positive
                border-radius--md
                justify-items--center
                align-items--center"
            >
                {#each {length: 9} as _, i}
                    <div class="font-weight--{i + 1}00">{i + 1}00</div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {#each {length: 9} as _, i}
                    {
`<div class="font-weight--${i + 1}00"> ... </div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</div>