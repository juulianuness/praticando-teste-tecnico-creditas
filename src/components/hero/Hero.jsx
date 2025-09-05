import { useState } from "react";
import './Hero.css';

export function Hero() {
    const [valorEmprestimo, setValorEmprestimo] = useState(57000);
    const [valorGarantia, setValorGarantia] = useState(19200);

    return (
        <section className="hero">
            <h1 className="title">
                Realize uma simulação de crédito utilizando seu bem como garantia.
            </h1>

            <div className='container'>
                <div className="simulador">
                    {/* Coluna 1 */}
                    <div className="coluna">
                        <div className="campo">
                            <label htmlFor="parcelas">Número de parcelas</label>
                            <select name="parcelas" id="parcelas">
                                <option value="24">24</option>
                                <option value="36">36</option>
                                <option value="48">48</option>
                            </select>
                        </div>
                        <div className="campo">
                            <label htmlFor="garantia">Garantia</label>
                            <select name="garantia" id="garantia" required>
                                <option value="Veículo">Veículo</option>
                                <option value="Imóvel">Imóvel</option>
                            </select>
                        </div>
                        <div className="campo">
                            <label htmlFor="emprestimoV">Valor do Empréstimo</label>
                            <input
                                type="number"
                                name="emprestimoV"
                                id="emprestimoV"
                                value={valorEmprestimo}
                                onChange={(e) => setValorEmprestimo(Number(e.target.value))}
                            />
                        </div>
                    </div>

                    {/* Coluna 2 */}
                    <div className="coluna">
                        <div className="campo">
                            <label htmlFor="garantiaV">Valor da Garantia</label>
                            <input
                                type="number"
                                name="garantiaV"
                                id="garantiaV"
                                value={valorGarantia}
                                onChange={(e) => setValorGarantia(Number(e.target.value))}
                            />
                        </div>

                        {/* Slider Garantia */}
                        <div className="range-container">
                            <input
                                type="range"
                                id="garantia-range"
                                name="garantiaV"
                                min="12000"
                                max="24000"
                                step="100"
                                value={valorGarantia}
                                onChange={(e) => setValorGarantia(Number(e.target.value))}/>
                            <div className="range-labels">
                                <span>12.000</span>
                                <span>24.000</span>
                            </div>
                        </div>
                        

                        {/* Slider Empréstimo */}
                        <div className="range-container">
                            
                            <input
                                type="range"
                                id="valor-emprestimo"
                                name="emprestimoV"
                                min="30000"
                                max="60000"
                                step="100"
                                value={valorEmprestimo}
                                onChange={(e) => setValorEmprestimo(Number(e.target.value))}
                            />
                            <div className="range-labels">
                                <span>30.000</span>
                                <span>60.000</span>
                            </div>
                            
                        </div>
                    </div>

                    {/* Resultado */}
                    <div>
                        <div className="resultado">
                            <h3>Valor da Parcela</h3>
                            <p className="valor">R$ 465,00</p>
                            <p>Total a pagar<br /><strong>R$ 11.112,00</strong></p>
                            <p>Taxa de juros (mês)<br /><strong>111,12%</strong></p>
                            <button className="btn">SOLICITAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
