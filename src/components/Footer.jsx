export default function Footer() {
  return (
    <footer class="  shadow  dark:bg-blue-950 ">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-black sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" class="hover:underline">
            Enigma™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" class="mr-4 hover:underline md:mr-6 ">
              home
            </a>
          </li>
          <li>
            <a href="/movies/popular" class="mr-4 hover:underline md:mr-6">
              pupular
            </a>
          </li>
          <li>
            <a href="/movies/top" class="mr-4 hover:underline md:mr-6">
              top
            </a>
          </li>
          <li>
            <a href="/movies/upcoming" class="hover:underline">
              upcoming
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
