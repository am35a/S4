<script>
    import Placement from './placement/Placement.svelte'

    // import Precode from 'component/Precode.svelte'
    // import Details from 'component/Details.svelte'

    // let positionPropertyArr = ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    //     positionProperty = positionPropertyArr[0]
</script>

<article>
    <h2 id="position">Position</h2>
    <section>
        <p>
            The <b>p-static</b> class sets an element is positioned according to the normal flow of the document.
        </p>
        <p>
            The <b>p-relative</b> class sets an element is positioned according to the bordered flow of the
            document.
        </p>
        <p>
            The <b>p-absolute</b> class sets an element is removed from the normal document flow, and no space is
            created for the element in the page layout but can stay bordered layout.
        </p>
        <p>
            The <b>p-fixed</b> removes an element from the normal document flow, and no space is created for the
            element in the page layout.
        </p>
        <p>
            The <b>p-sticky</b> class removes an element from the normal flow of the document if an offset relative
            to its nearest scrollable ancestor and containing block is available.
        </p>
    </section>
    <Placement/>
</article>