import Navbar from "../components/Navbar";

export default function CVPage() {
  return (
    <>
      <Navbar /> {/* Mantém o Navbar fixo */}
      <main className="relative w-full h-screen bg-[#121212]">
        <embed
          src="/cvgabriel.pdf"  // O arquivo PDF deve estar na pasta "public"
          type="application/pdf"
          className="absolute top-0 left-0 w-full h-full border-none"
          style={{
            objectFit: "fill",  // Faz o PDF preencher completamente a tela
            padding: 0,
            margin: 0,
            overflow: "hidden",
          }}
        />
        <div className="text-center mt-4 absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a
            href="/cvgabriel.pdf"  // Link para download
            download="Meu_Curriculo.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            📥 Download Resume
          </a>
        </div>
      </main>
    </>
  );
}
