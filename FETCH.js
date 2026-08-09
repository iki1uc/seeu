async function prefetch(url) {
  try {
    const res = await fetch(url, { cache: "force-cache" });
    return await res.text();
  } catch (e) {
    return null;
  }
}
