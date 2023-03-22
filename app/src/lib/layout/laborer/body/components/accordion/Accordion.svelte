<script lang="ts">
    import Accordion from 'component/Accordion.svelte'
    import Precode from 'component/Precode.svelte'
</script>

<article>
    <h2 id="accordion">Accordion</h2>
    <p>
        ...
    </p>
    <div class="d-grid g-5">
        <div class="d-grid g-4">
            <b>Preview</b>
            <div class="d-flex p-4 bgc-positive br">
                <Accordion>
                    <details class="shadow rounded p-2">
                        <summary>Section 1</summary>
                        <p>Content for section 1 goes here.</p>
                    </details>
                    <details class="shadow rounded p-2">
                        <summary>Section 2</summary>
                        <p>Content for section 2 goes here.</p>
                    </details>
                    <details class="shadow rounded p-2">
                        <summary>Section 3</summary>
                        <p>Content for section 3 goes here.</p>
                    </details>
                    <details class="shadow rounded p-2">
                        <summary>Section 4</summary>
                        <p>Content for section 4 goes here.</p>
                    </details>
                </Accordion>
            </div>        
        </div>
        <div class="d-grid g-4">
            <div class="d-grid g-4">
                <b>Svelte</b>
                <Precode>
                    {
`// before using the component, import it
// import Accordion from 'component/Accordion.svelte'

`
                    }
                </Precode>
            </div>
        </div>
    </div>
</article>