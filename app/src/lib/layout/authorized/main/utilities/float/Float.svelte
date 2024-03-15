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
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-grid g-3 p-3 background-color--positive border-radius--md">
                {#each sidesArr as side}
                    <div class="background-color--negative-10 p-2">
                        <div class="float--{side} background-color--negative-10 p-2">{side}</div>
                        Unde quae consequatur optio, saepe, harum modi nobis excepturi cum ducimus minima architecto tenetur laudantium quaerat rem fuga nihil nemo distinctio beatae minus, rerum voluptate vel facere. Corporis, blanditiis inventore!
                    </div>
                {/each}
            </div>
        </div>
        <div class="d-grid g-4">
            <b>HTML</b>
            <Precode class="border-radius--top-0">
                {#each sidesArr as side}
                    {
`<div>
    <div class="float--${side}">${side}</div>
    // ...
</div>
`
                    }
                {/each}
            </Precode>
        </div>
    </div>
</article>