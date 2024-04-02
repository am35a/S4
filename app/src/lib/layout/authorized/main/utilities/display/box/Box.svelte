<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let boxNone: boolean = false
</script>

<section class="display--grid gap--xs">
    <h3 id="box">Box</h3>
    <p>
        Using a <b>display--none</b> class make an element as hide as look like removed from DOM tree.
    </p>
    <div class="display--grid gap--lg">
        <div class="alert alert-info justify-self--start">
            <span class="ico font-size--xl" style="--ico-image: url(/icons/info-circle.svg)"></span>
            By wrapping a container in a container with <b>display--contents</b> class, you create a container
            with the properties of a non-existent parent, which has no effect on the child element.
            The <b>display--contents</b> works well with defining variables for child content.
        </div>
        <div class="display--grid gap--md">
            <b>Display</b>
            <div class="display--inline-flex flex-wrap--wrap gap--sm">
                <button
                    class="btn"
                    class:active={boxNone}
                    on:click={() => boxNone = !boxNone}
                >none {boxNone ? 'on' : 'off'}</button>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Preview</b>
            <div class="display--grid gap--sm padding--sm background-color--positive border-radius--md">
                <div
                    class="background-color--negative-10 padding--md"
                    class:display--none={boxNone}
                >container</div>
            </div>
        </div>
        <div class="display--grid gap--md">
            <b>Code</b>
            <Precode>
                {
`<div ${boxNone ? 'class="display--none"' : ''}> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>