<script>
	import './styles.css';
</script>

<nav class="flex items-center justify-between flex-wrap bg-slate-900 p-6">
  <div class="flex items-center flex-shrink-0 text-slate-100 mr-6">
    <img src="/logo-white.png" alt="logo-white">
    <span class="font-semibold text-4xl mx-4 tracking-tight">Skald</span>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white mr-4 hover:underline mx-2">Home</a> 
      <a href="/pricing" class="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white mr-4 hover:underline mx-2">
        Pricing
      </a> 
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white hover:underline mx-2">
        About
      </a> 
      <a href="/prompt" class="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-white hover:underline mx-2">
        Prompt Generator
      </a> 
    </div>
    <div>
    <a href="/create" class="inline-block text-sm px-4 py-2 leading-none border rounded text-amber-500 border-amber-500 hover:border-transparent  hover:bg-amber-500 hover:text-white mt-4 mx-4 lg:mt-0">
        Create
      </a>
      <a href="/signin" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Sign in</a>
    </div>
  </div>
</nav>