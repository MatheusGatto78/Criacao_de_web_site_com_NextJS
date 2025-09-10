export const metadata = {
  title: 'Contato - UNIVILLE',
  description: 'Entre em contato conosco. Informações dos nossos campus e canais de atendimento.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contato</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Campus 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-4">Campus Regina</h3>
            <div className="space-y-2 text-gray-700">
              <p>uni@email.com</p>
              <p>(47) 3345-7888</p>
              <p>Rua da 123</p>
              <p>Bairro 123</p>
              <p>Bloco Social Fundação Educacional Univ</p>
              <p>CNPJ 123.456.789/0001-98</p>
            </div>
          </div>

          {/* Campus 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-4">Campus Regina</h3>
            <div className="space-y-2 text-gray-700">
              <p>uni@email.com</p>
              <p>(47) 3345-7888</p>
              <p>Rua da 123</p>
              <p>Bairro 123</p>
              <p>Bloco Social Fundação Educacional Univ</p>
              <p>CNPJ 123.456.789/0001-98</p>
            </div>
          </div>

          {/* Campus 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-4">Campus Regina</h3>
            <div className="space-y-2 text-gray-700">
              <p>uni@email.com.br</p>
              <p>(47) 3345-7888</p>
              <p>Rua da 123</p>
              <p>Bairro 123</p>
              <p>Bloco Social Fundação Educacional Univ</p>
              <p>CNPJ 123.456.789/0001-98</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Envie uma Mensagem</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
