<script>
	import { onMount } from 'svelte'
	
    let accordion = undefined

	onMount(() => {
        const sections = accordion.querySelectorAll('details')
        sections.forEach((section) => {
            section.addEventListener('click', () => {
                // Close all sections except the one clicked
                sections.forEach((s) => {
                    if (s !== section && s.hasAttribute('open'))
                        s.removeAttribute('open')
                })
            })
        })
	})
</script>

<div
    bind:this={accordion}
    {...$$restProps}
>
	<slot/>
</div>