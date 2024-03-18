<script lang="ts">
    import Precode from 'component/Precode.svelte'

    let boxNone: boolean = false
</script>

<section class="display--grid g-2">
    <h3 id="box">Box</h3>
    <p>
        Using a <b>display--none</b> class make an element as hide as look like removed from DOM tree.
    </p>
    <div class="display--grid g-5">
        <div class="alert alert-info justify-self--start">
            <span class="ico fs-xl" style="--ico-image: url(/icons/info-circle.svg)"></span>
            By wrapping a container in a container with <b>display--contents</b> class, you create a container
            with the properties of a non-existent parent, which has no effect on the child element.
            The <b>display--contents</b> works well with defining variables for child content.
        </div>
        <div class="display--grid g-4">
            <b>Display</b>
            <div class="display--inline-flex fw-wrap g-3">
                <button
                    class="btn"
                    class:active={boxNone}
                    on:click={() => boxNone = !boxNone}
                >none {boxNone ? 'on' : 'off'}</button>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>Preview</b>
            <div class="display--grid g-3 p-3 background-color--positive border-radius--md">
                <div
                    class="background-color--negative-10 p-4"
                    class:display--none={boxNone}
                >container</div>
            </div>
        </div>
        <div class="display--grid g-4">
            <b>HTML</b>
            <Precode class="border-radius--top-0">
                {
`<div ${boxNone ? 'class="display--none"' : ''}> ... </div>
`
                }
            </Precode>
        </div>
    </div>
</section>