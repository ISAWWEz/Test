# ZASTARES AI - Temel Araştırma Mantığı
def zastares_soru_isle(soru):
    # 1. Adım: Soru araştırma gerektiriyor mu?
    if "nedir" in soru or "güncel" in soru: 
        web_verisi = web_arama_yap(soru) # Webden veriyi çek
        cevap = grok_api.generate(prompt=f"Şu verilere dayanarak cevapla: {web_verisi}")
    else:
        cevap = grok_api.generate(prompt=soru) # Doğrudan cevapla
    
    return cevap
