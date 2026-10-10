<footer class="bg-gray-900 dark:bg-[#0E122F] text-white border-t border-gray-800 dark:border-[#2E3A82]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            
            <!-- Col 1: Company Info -->
            <div class="md:col-span-1 space-y-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded bg-[#12173B] border border-[#F5FF67] flex items-center justify-center text-[#F5FF67] font-mono font-bold text-sm">
                        &lt;/&gt;
                    </div>
                    <span class="font-bold text-2xl font-mono tracking-tight text-white">Dev<span class="text-[#F5FF67]">TZ</span></span>
                </div>
                
                <p class="text-xs text-gray-400 leading-relaxed">
                    Premium software solutions and digital services for enterprises and individuals. Transforming ideas into powerful digital realities.
                </p>

                <div class="text-xs font-mono text-gray-400 space-y-1 pt-2">
                    <div class="flex items-center gap-2">
                        <span class="text-[#F5FF67]">📍</span>
                        <span>Dar es Salaam, Tanzania</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-[#F5FF67]">✉</span>
                        <a href="mailto:info@devtz.site" class="hover:text-white transition-colors">info@devtz.site</a>
                    </div>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div>
                <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-[#F5FF67] mb-4">// Quick Links</h3>
                <ul class="space-y-2 text-xs font-mono text-gray-400">
                    <li><a href="#services" class="hover:text-white transition-colors flex items-center gap-1.5"><span class="text-[#F5FF67]">▸</span> Services</a></li>
                    <li><a href="#about" class="hover:text-white transition-colors flex items-center gap-1.5"><span class="text-[#F5FF67]">▸</span> About Us</a></li>
                    <li><a href="#projects" class="hover:text-white transition-colors flex items-center gap-1.5"><span class="text-[#F5FF67]">▸</span> Projects</a></li>

                    <li><a href="#team" class="hover:text-white transition-colors flex items-center gap-1.5"><span class="text-[#F5FF67]">▸</span> Engineering Team</a></li>
                    <li><a href="#hire-us" class="hover:text-white transition-colors flex items-center gap-1.5"><span class="text-[#F5FF67]">▸</span> Start a Project</a></li>
                    <li><a href="#contact" class="hover:text-white transition-colors flex items-center gap-1.5"><span class="text-[#F5FF67]">▸</span> Contact Us</a></li>
                </ul>
            </div>

            <!-- Col 3: Our Services -->
            <div>
                <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-[#F5FF67] mb-4">// Our Services</h3>
                <ul class="space-y-2 text-xs font-mono text-gray-400">
                    <li><span class="text-gray-300">Enterprise Software</span></li>
                    <li><span class="text-gray-300">Web Development</span></li>
                    <li><span class="text-gray-300">Mobile Applications</span></li>
                    <li><span class="text-gray-300">Automation & RPA</span></li>
                    <li><span class="text-gray-300">System Maintenance & Support</span></li>
                    <li><span class="text-gray-300">Security & Compliance</span></li>
                </ul>
            </div>

            <!-- Col 4: Newsletter & System Info -->
            <div class="space-y-4">
                <h3 class="text-xs font-mono font-bold uppercase tracking-widest text-[#F5FF67] mb-4">// DevTZ Terminal Shell</h3>
                <p class="text-xs text-gray-400 leading-relaxed">
                    Press <kbd class="px-1.5 py-0.5 text-[10px] bg-[#12173B] border border-[#2E3A82] rounded text-[#F5FF67]">Ctrl + K</kbd> anywhere to open the CLI shell interface.
                </p>

                <button @click="toggleTerminal()" class="w-full py-2.5 px-4 rounded-xl bg-[#12173B] border border-[#2E3A82] hover:border-[#F5FF67] text-xs font-mono text-[#F5FF67] flex items-center justify-center gap-2 transition-all">
                    <span>Launch Terminal Shell</span>
                    <span>&gt;_</span>
                </button>
            </div>

        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-800 dark:border-[#2E3A82] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
            
            <div class="flex items-center gap-6">
                <!-- GitHub -->
                <a href="https://github.com/DevTZ" target="_blank" rel="noopener noreferrer" title="GitHub" class="hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <!-- LinkedIn -->
                <a href="https://linkedin.com/company/devtz" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <!-- WhatsApp -->
                <a href="https://wa.me/255746439242" target="_blank" rel="noopener noreferrer" title="WhatsApp: +255 746 439 242" class="hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                <!-- Instagram -->
                <a href="https://instagram.com/devtz" target="_blank" rel="noopener noreferrer" title="Instagram: @DevTZ" class="hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
            </div>

            <p>&copy; {{ date('Y') }} DevTZ. All rights reserved.</p>

        </div>

    </div>
</footer>
