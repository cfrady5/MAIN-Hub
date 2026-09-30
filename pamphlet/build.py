"""Build the COMMONS Network Brief: inline the brand mark, then print a 10-page PDF with headless Chromium."""
import base64, re, subprocess, pathlib, glob

here = pathlib.Path(__file__).parent
root = here.parent
mark = re.search(r' d="([^"]+)"', (root / "public/brand/mark.svg").read_text()).group(1)

traces = [
    "M-40 120 H220 L300 200 H520 L600 280 H820",
    "M-40 320 H160 L240 400 H420 L500 480 H760 L840 560 H1100",
    "M1480 80 H1240 L1160 160 H980 L900 240 H700",
    "M1480 620 H1280 L1200 540 H1000 L920 460 H720",
    "M120 900 V720 L200 640 V520 L280 440 V300",
    "M1360 920 V760 L1280 680 V560 L1200 480 V360",
    "M-40 760 H120 L180 700 H360 L440 620 H620",
    "M1480 340 H1320 L1260 400 H1080 L1000 480 H860",
]
nodes = [(820, 280), (1100, 560), (700, 240), (720, 460), (280, 300), (1200, 360), (620, 620), (860, 480),
         (520, 200), (420, 400), (980, 160), (1000, 540)]
traces_svg = (
    '<svg class="traces" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">'
    '<g stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.22">'
    + "".join(f'<path d="{d}"/>' for d in traces)
    + '</g><g fill="#0a1424" stroke="currentColor" stroke-width="1.5" opacity="0.5">'
    + "".join(f'<circle cx="{x}" cy="{y}" r="5"/>' for x, y in nodes)
    + "</g></svg>"
)

html = (here / "commons-network-brief.src.html").read_text()
font = "data:font/woff2;base64," + base64.b64encode((here / "fonts/PlusJakartaSans-latin.woff2").read_bytes()).decode()
html = html.replace("__FONT__", font).replace("__MARK_PATH__", mark).replace("__TRACES__", traces_svg)
out_html = here / "commons-network-brief.html"
out_html.write_text(html)

chrome = sorted(glob.glob("/opt/pw-browsers/chromium-*/chrome-linux/chrome"))[-1]
subprocess.run([
    chrome, "--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
    "--virtual-time-budget=5000", "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={here / 'MAIN_COMMONS_Network_Brief.pdf'}", out_html.as_uri(),
], check=True)
print("wrote", here / "MAIN_COMMONS_Network_Brief.pdf")

# Duplex copy: rotate the interior back sides (pages 2, 4, 6, 8) 180 degrees so that when the landscape pages
# print double-sided with the printer's default long-edge flip, the backs come out right side up.
# The last page is the back cover, so it stays upright.
import pymupdf

full = here / "MAIN_COMMONS_Network_Brief.pdf"
duplex = here / "MAIN_COMMONS_Network_Brief_duplex.pdf"
src = pymupdf.open(full)
out = pymupdf.open()
for i, page in enumerate(src):
    dst = out.new_page(width=page.rect.width, height=page.rect.height)
    dst.show_pdf_page(dst.rect, src, i, rotate=180 if i % 2 and i != len(src) - 1 else 0)
out.save(duplex, garbage=4, deflate=True)
print("wrote", duplex)
