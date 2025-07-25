import { useEffect, useState } from "react";

const horarios = {
  segunda: [9, 19],
  terca: [9, 19],
  quarta: [9, 19],
  quinta: [9, 19],
  sexta: [9, 19],
  sabado: [0, 0],   // fechado
  domingo: [0, 0],  // fechado
};

const diasSemana = [
  "domingo",
  "segunda",
  "terca",
  "quarta",
  "quinta",
  "sexta",
  "sabado",
];

export default function Contato() {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const agora = new Date();
      setHoraAtual(agora);

      const dia = diasSemana[agora.getDay()];
      const [abre, fecha] = horarios[dia];
      const hora = agora.getHours();

      setAberto(hora >= abre && hora < fecha);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const horaFormatada = horaAtual.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="min-h-screen bg-[#f1ede7]/80 flex flex-col justify-center items-center pt-32 pb-16">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/90 rounded-3xl shadow-lg p-4 md:p-10 relative">
        {/* Detalhe decorativo */}
        <div className="absolute -top-8 left-8 w-16 h-16 bg-[#ffeacb] rounded-full opacity-60 z-0"></div>
        <div className="absolute -bottom-8 right-8 w-24 h-24 bg-[#bfa16b] rounded-full opacity-10 z-0"></div>

        {/* Informações de contato */}
        <div className="relative z-10 flex flex-col justify-center px-2 md:px-4">
          <h2 className="text-3xl font-bold text-[#2d3d28] mb-6 font-serif">Horário & Contato</h2>
          <p className="text-gray-600 mb-6 text-sm">Agende seu horário ou tire dúvidas:</p>
          
          {/* Bloco de contato estilizado */}
          <div className="space-y-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-7 h-0.5 bg-[#bfa16b] rounded"></span>
                <span className="text-lg font-bold text-[#2d3d28]">Base</span>
              </div>
              <div className="text-gray-700 ml-9">Rua Exemplo, 123 - Centro, Cidade/UF</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-7 h-0.5 bg-[#bfa16b] rounded"></span>
                <span className="text-lg font-bold text-[#2d3d28]">Email</span>
              </div>
              <div className="text-gray-700 ml-9">contato@salon.com.br</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-block w-7 h-0.5 bg-[#bfa16b] rounded"></span>
                <span className="text-lg font-bold text-[#2d3d28]">Telefone</span>
              </div>
              <div className="text-gray-700 ml-9">+55 21 99999-9999</div>
            </div>
          </div>

          {/* Horário agora */}
          <div className="mb-2">
            <div className="text-lg font-semibold text-[#bfa16b] mb-1">Horário agora</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🕒</span>
              <span className="font-mono">{horaFormatada}</span>
              <span className={`font-bold ${aberto ? "text-green-600" : "text-red-600"}`}>
                {aberto ? "Aberto" : "Fechado"}
              </span>
            </div>
          </div>
          {/* Tabela de horários */}
          <div className="text-sm text-gray-700 mt-2">
            <div className="grid grid-cols-2 gap-x-1">
              <div className="space-y-1">
                {Object.entries(horarios).map(([dia]) => (
                  <div
                    key={dia}
                    className="capitalize flex items-center h-7"
                  >
                    <span className="flex-1">{dia}-feira</span>
                    <span className="block h-0.5 w-20 mx-4 bg-[#bfa16b] rounded opacity-70"></span>
                  </div>
                ))}
              </div>
              <div className="space-y-1 text-left pl-4">
                {Object.entries(horarios).map(([dia, [abre, fecha]]) => (
                  <div key={dia} className="h-7 flex items-center">
                    {abre === 0 && fecha === 0
                      ? <span className="text-red-500 font-semibold">Fechado</span>
                      : <span className="text-[#2d3d28]">{`${String(abre).padStart(2, "0")}:00 - ${String(fecha).padStart(2, "0")}:00`}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="w-full h-[340px] rounded-2xl overflow-hidden shadow-lg border border-[#ffeacb]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7606559932733!2d-43.031732100000006!3d-22.8852983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9985c49eb13773%3A0xecdef6ef53e04344!2sLissa%20Beauty%20Concept!5e0!3m2!1spt-BR!2sbr!4v1752704709983!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do salão"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
