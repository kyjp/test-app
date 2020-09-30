import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import * as color from '../../../cmn/color'
import SwipeableViews from 'react-swipeable-views'

const GlobalStyle = createGlobalStyle`
html, body{
  height: 100%;
}`

const Section = styled.section`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow-y: auto;
`

const Head = styled.h1`
  font-size: 2.0rem;
`

const SubHead = styled.h2`
  font-size: 1.6rem;
`

const Code = styled.code`
  background: ${color.LightGray};
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${color.Gray};
`
const Table = styled.table`
  border-radius: 5px;
  border-collapse: collapse;
  th, td{
    padding: 10px;
    border: 1px solid ${color.Gray};
  }
`

const DescriptionPagePresenter: FC = () => {
  return (
    <>
      <GlobalStyle />
      <SwipeableViews enableMouseEvents>
        <Section>
          <Head>テスト</Head>
          <p>品質管理<br />ユーザにとっていいものを作る過程であり、なにが必要かを考えながらやる必要がある</p>
        </Section>
        <Section>
          <Head>リグレッションテスト</Head>
          <p>修正の影響範囲を予測してテストを行うこと</p>
          <SubHead>フルリグレッションテスト</SubHead>
          <p>修正をしたときにすべてのテストを再実地すること</p>
        </Section>
        <Section>
          <Head>テストレベル</Head>
          <Table>
            <thead>
              <tr>
                <th>テストレベル</th>
                <th>概要</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>単体テスト</th>
                <td>機能の最小単位で行うテスト<br />開発した部品が設計通りに動くかテストする</td>
              </tr>
              <tr>
                <th>結合テスト</th>
                <td>機能間、画面感の結合を確認するテスト<br />単体テストが完了したものを組み合わせて一連の動作に不具合がないか確認する</td>
              </tr>
              <tr>
                <th>総合テスト</th>
                <td>出来上がったシステムを可能な限り運用想定で確認するテスト</td>
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <Head>テスト観点</Head>
          <p>どのような部分をテストするかまとめたもの</p>
          <p>まずは機能一覧を作成し、機能毎にに正常系、異常系を追記する</p>
          <Table>
            <tbody>
              <tr>
                <th>正常系</th>
                <td>対象の機能が想定通りの操作で正常に動くことを確認するテスト</td>
              </tr>
              <tr>
                <th>異常系</th>
                <td>対象の機能が異常な操作で正常に動くことを確認するテスト</td>
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <Head>テスト技法</Head>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>ホワイトボックステスト</th>
                <th>ブラックボックステスト</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>概要</th>
                <td>プログラム内部の処理フローにしたがってパターンを網羅するテスト手法（mockという擬似的なpropsを渡してテストする）</td>
                <td>仕様書に基づいてユーザに見える部分を網羅するテスト手法（ユーザーが使用する形でブラウザでテストする）</td>
              </tr>
              <tr>
                <th>対象テストレベル</th>
                <td>単体テスト（unit test）</td>
                <td>結合テスト（integration test）/総合テスト（end to end）</td>
              </tr>
              <tr>
                <th>設計/実地担当者</th>
                <td>エンジニア</td>
                <td>QAエンジニア</td>
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <Head>ソフトウェアテスト技法</Head>
          <p>なるべく少ないテストケースでなるべく多くのバグを発見するための技術のこと<br />現実的に実行できるレベルの量までテストケースを削減しつつ、 少ないテストケースでも品質を保証できるように最適なテストケースを設計する</p>
        </Section>
        <Section>
          <Head>網羅性とピンポイント</Head>
          <SubHead>重要な2つの概念</SubHead>
          <Table>
            <tbody>
              <tr>
                <th>網羅性</th>
                <td>テストの抜け漏れをなるべくなくす</td>
              </tr>
              <tr>
                <th>ピンポイント</th>
                <td>怪しいところを入念に調べる</td>
              </tr>
            </tbody>
          </Table>
          <SubHead>テストの観点を広げる</SubHead>
          <ul>
            <li>具体的な例を考え、その例の「間」「逆」「類推」「外側」を考える</li>
            <li>意地悪な条件を考える</li>
            <li>自分が「知っている」「当たり前」と思っていることこそ疑う</li>
          </ul>
        </Section>
        <Section>
          <Head>テスト設計アプローチ</Head>
          <p>どんなアプローチでテストをするのかを明確に​した上で、 テストを実行することが大事<br />以下はテストの指針になる２つのアプローチ</p>
          <SubHead>契約によるテスト</SubHead>
          <p>事前条件の範囲内だけでテストを行うアプローチ</p>
          <SubHead>防御的テスト</SubHead>
          <p>事前条件の範囲外もテストを行うアプローチ</p>
          <br />
        </Section>
        <Section>
          <Head>同値クラステスト</Head>
          <p></p>
          <Code>
            {`if (a == 2){
            function
          } else if(a == 4){
            function
          } else {
            function
          }`}
          </Code>
          <SubHead>テストケース</SubHead>
          <ul>
            <li>a = 2</li>
            <li>a = 4</li>
            <li>a = 1</li>
          </ul>
          <p>同値クラスとはテスト的には同じ意味になる値のこと<br />上記のような例を同値クラステストという</p>
        </Section>
        <Section>
          <Head>境界値テスト</Head>
          <Code>
            {`if (a == 2){
            function
          } else if(a == 4){
            function
          } else {
            function
          }`}
          </Code>
          <SubHead>テストケース</SubHead>
          <ul>
            <li>a = 1</li>
            <li>a = 2</li>
            <li>a = 3</li>
            <li>a = 4</li>
            <li>a = 5</li>
            <li>a = 6</li>
            <li>a = 7</li>
          </ul>
          <p>上記のような例を境界値テストという<br />境界値とその前後をテストするもの</p>
        </Section>
        <Section>
          <Head>ドメイン分析テスト</Head>
          <p>条件同士が相互作用を持つ​ような場合<br />複数の条件が​数式​で結ばれている場合に有効</p>
          <p>ドメイン分析テストを理解するには、以下の「​4つのポイント​」の理解が必要</p>
          <Table>
            <tbody>
              <tr>
                <th>ポイント名</th>
                <th>概要</th>
              </tr>
              <tr>
                <th>on</th>
                <td>境界上の値</td>
              </tr>
              <tr>
                <th>off</th>
                <td>境界の前後の値</td>
              </tr>
              <tr>
                <th>in</th>
                <td>on / off 以外のドメイン内側の値</td>
              </tr>
              <tr>
                <th>out</th>
                <td>on / off 以外のドメイン外側の値</td>
              </tr>
            </tbody>
          </Table>
          <p>エラーは他のエラーを隠してしまうので検証箇所は一箇所ずつにする<br />検証する変数のonポイントとoffポイントを動かして、その他の変数はinポイントに入れることで一つずつ検証できる</p>
          <br />
          <p>例：とある試験では実技と筆記の合計点で合格が決まる<br />この試験では座学を重視しているので筆記テストが100点満点、実技が80点満点となっている<br />合計得点が130点以上であれば合格だが、筆記が70点未満なら不合格になる</p>
          <p>２つの条件を組み合わせて検証する</p>
          <ul>
            <li>{`70点 <= 筆記`}</li>
            <li>{`130点 <= 筆記 + 実技`}</li>
          </ul>
          <p>網羅的に行うためドメインテストマトリクスを使って検証する</p>
          <ol>
            <li>条件をリストアップ</li>
            <li>行に条件をいれ、on/off/inポイントの行をその中に入れる</li>
            <li>一番下に期待される結果の行を入れる</li>
            <li>一つの条件以外はinポイントにして、検証する条件のon/offポイントを検証する</li>
          </ol>
          <p>ドメインテストマトリクスを使うと、​列がそのままテストケースになる</p>
          <Table>
            <tbody>
              <tr>
                <th>変数</th>
                <th>条件</th>
                <th>ポイント</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
              </tr>
              <tr>
                <th rowSpan={3}>筆記</th>
                <td rowSpan={3}>{`70点 <= 筆記`}</td>
                <td>on</td>
                <td>70</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>off</td>
                <td></td>
                <td>69</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>in</td>
                <td></td>
                <td></td>
                <td>80</td>
                <td>90</td>
              </tr>
              <tr>
                <th rowSpan={3}>実技</th>
                <td rowSpan={3}>{`130点 <= 筆記 + 実技`}</td>
                <td>on</td>
                <td></td>
                <td></td>
                <td>80 / 50</td>
                <td></td>
              </tr>
              <tr>
                <td>off</td>
                <td></td>
                <td></td>
                <td></td>
                <td>90 / 39</td>
              </tr>
              <tr>
                <td>in</td>
                <td>70 / 60</td>
                <td>69 / 61</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th colSpan={3}>期待される結果</th>
                <td>合格</td>
                <td>不合格</td>
                <td>合格</td>
                <td>不合格</td>
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <Head>デシジョンテーブル</Head>
          <p>条件同士は独立​していて、込み入った論理関係を整理する場合<br />複数の条件が​論理式​で結ばれている場合に有効</p>
          <p>条件とその結果を埋めていくことで作成する<br />列がそのままテストケースになる<br />条件が増えた場合、テストケースが膨大になってしまうが、条件分岐の順番が判明している、かつ順番が一定ならば圧縮が可能</p>
          <p>例：食品を2000円以上購入した離島以外に住む人は送料無料</p>
          <p>{`論理式: 食品を購入している && 2000円以上購入している && 離島に住んでいない`}</p>
          <Table>
            <tbody>
              <tr>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
              </tr>
              <tr>
                <th>条件</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>食品を購入している</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <th>2000円以上購入している</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <th>離島に住んでいる</th>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>結果</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>送料無料</th>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <p>順番を固定して圧縮した場合のデシジョンテーブル<br />どれか一つでも偽なら以降の判定は行わない</p>
          <Table>
            <tbody>
              <tr>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
              </tr>
              <tr>
                <th>条件</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>食品を購入している</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <th>2000円以上購入している</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>No</td>
                <td>-</td>
              </tr>
              <tr>
                <th>離島に住んでいる</th>
                <td>Yes</td>
                <td>No</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>結果</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>送料無料</th>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
        </Section>
        <Section>
          <Head>ペア構成テスト</Head>
          <p>すべての組み合わせをテストするのではなく、​すべてのペアをテスト​する技法<br />少ないテストケースである程度の網羅性を確保する</p>
          <Table>
            <tbody>
              <tr>
                <th>シングルモード欠陥</th>
                <td>モジュールが正しく動かない欠陥</td>
              </tr>
              <tr>
                <th>ダブルモード欠陥</th>
                <td>2つのモジュールが組み合わさったときに生じる欠陥</td>
              </tr>
            </tbody>
          </Table>
          <p>ほとんどの欠陥は​シングルモード欠陥​と​ダブルモード欠陥​のどちらかであるため、すべてのペアを調べれば、ある程度の網羅性を確保できる<br />ペア構成テストによって70~85%程度のバグを発見することが期待できる</p>
          <SubHead>すべてのペアとは</SubHead>
          <p>例:条件A, B, Cが2値条件である場合、AとB、AとC，BとCの3通りの組み合わせそれぞれに 0,0、0,1、1,0、 1,1 の4通りの値がある状態</p>
          <SubHead>直交表</SubHead>
          <p>すべてのペアを抜けもれなく網羅する方法のひとつ<br />直交表の表記法の例：4行で2値条件が3つの場合「L4(2^3)」と表記する</p>
          <Table>
            <tbody>
              <tr>
                <th></th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
              </tr>
              <tr>
                <th>1</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th>2</th>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <th>3</th>
                <td>1</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <th>4</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
          <p>直交表は自分でつくるものではなく、すでにあるものの中から​目的に応じて適切な直交表を選ぶ<br />直交表のカタログサイトから適切な直交表を選択する​</p>
          <ol>
            <li>条件をすべて洗い出す</li>
            <li>各条件が取りうる値の数を求める</li>
            <li>1,2の条件にあう直交表を選ぶ、完全一致がないなら少し大きめを選ぶ</li>
            <li>直交表にテスト対象の条件を当てはめる</li>
          </ol>
          <p>※ 直交表を使わずに全ペアのテストケースを作成できるツールもある</p>
        </Section>
        <Section>
          <Head>状態遷移テスト</Head>
          <p>現在の状態と遷移によって振る舞いが変わるソフトウェアをテストする​ための技法<br />簡単に​全体を確認​する​状態遷移図​と、深く​詳細を確認​する​状態遷移表​がある</p>
        </Section>
        <Section>
          <Head>状態遷移図</Head>
          <p>状態遷移は「状態」「遷移」「イベント」の3つからなる</p>
          <p>例：ストップウォッチ</p>
          <img src="https://img.atwikiimg.com/www61.atwiki.jp/kumikomi-yitjc/attach/23/208/%E7%8A%B6%E6%85%8B%E9%81%B7%E7%A7%BB%E5%9B%B32.png" alt="" />
        </Section>
        <Section>
          <Head>状態遷移表</Head>
          <p>N/Aも含めて抜けもれなくテストケースをチェックするためのもの<br />仕様の抜け漏れのチェックもすることができる​</p>
          <p>例：ストップウォッチ</p>
          <Table>
            <tbody>
              <tr>
                <th>イベント \ 状態</th>
                <th>①初期状態</th>
                <th>②計測中</th>
                <th>③待機中</th>
              </tr>
              <tr>
                <th>スタートボタン</th>
                <td>②</td>
                <td>③</td>
                <td>②</td>
              </tr>
              <tr>
                <th>リセットボタン</th>
                <td>N/A</td>
                <td>N/A</td>
                <td>①</td>
              </tr>
            </tbody>
          </Table>
          <p>※ ​N/A(Not Applicable)・・・イベントが適用不可のこと</p>
        </Section>
        <Section>
          <Head>Nスイッチカバレッジ</Head>
          <p>システムの仕様書から「状態」と「イベント」を洗い出して、そのイベントの表す遷移をすべて確認するもの</p>
          <p>Nスイッチカバレッジのテストを実施するには、状態遷移表を​前状態（行）×後状態（列）の関係行列​の形に書き直す</p>
          <p>Nの数が大きくなるほどテストケースが増大する</p>
          <SubHead>サンプル</SubHead>
          <p>例：関係行列</p>
          <Table>
            <thead>
              <tr>
                <th>前状態 \ 後状態</th>
                <th>①初期状態</th>
                <th>②動作中</th>
                <th>③停止中</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>①初期状態</th>
                <td>R</td>
                <td>S</td>
                <td></td>
              </tr>
              <tr>
                <th>②動作中</th>
                <td>R</td>
                <td></td>
                <td>S</td>
              </tr>
              <tr>
                <th>③停止中</th>
                <td>R</td>
                <td>S</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <p>表：1スイッチカバレッジ</p>
          <Table>
            <thead>
              <tr>
                <th>前状態 \ 後状態</th>
                <th>①初期状態</th>
                <th>②動作中</th>
                <th>③停止中</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>①初期状態</th>
                <td>RR + SR</td>
                <td>RS</td>
                <td>SS</td>
              </tr>
              <tr>
                <th>②動作中</th>
                <td>RR + SR</td>
                <td>RS + SS</td>
                <td></td>
              </tr>
              <tr>
                <th>③停止中</th>
                <td>RR + SR</td>
                <td>RS</td>
                <td>SS</td>
              </tr>
            </tbody>
          </Table>
        </Section>
      </SwipeableViews>
    </>
  )
}

export default DescriptionPagePresenter
