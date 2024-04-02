<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let sidesArr = ['left', 'right', 'start', 'end']
</script>

<article>
    <h2 id="float">Float</h2>
    <p>
        Use <b>float--{sidesArr.join('/')}</b> classes to floats any element across any device breakpoints.
        The <b>float--none</b> class is used to disable float presets.
    </p>
    <div class="display--grid gap--lg">
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                {#each sidesArr as side}
                    <div class="background-color--negative-10 padding--xs">
                        <div class="float--{side} background-color--negative-10 padding--xs">{side}</div>
                        Unde quae consequatur optio, saepe, harum modi nobis excepturi cum ducimus minima architecto tenetur laudantium quaerat rem fuga nihil nemo distinctio beatae minus, rerum voluptate vel facere. Corporis, blanditiis inventore!
                    </div>
                {/each}
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {#each sidesArr as side}
                    {
`<div>
    <div class="float--${side}">${side}</div>
    ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</article>